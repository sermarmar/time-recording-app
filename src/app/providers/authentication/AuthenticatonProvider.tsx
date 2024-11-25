import { useEffect, useState } from "react"
import { AuthenticationContext } from "./AuthenticationContext"
import { SessionDto } from "../../../core/dtos/SessionDto";
import { LoginUseCase } from "../../../core/useCases/User/LoginUseCase";
import { useNavigate } from "react-router-dom";

interface AuthenticationProviderProps {
    children: React.ReactNode
}

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [session, setSession] = useState<SessionDto>();
    
    useEffect(() => {
        getSession();
    }, []);

    const login = (email: string, pass: string) => {
        LoginUseCase.login(email, pass).then(() => {
            getSession();
            navigate('/timer');
        });
    }

    const logout = () => {
        sessionStorage.removeItem('userSession');
    }

    const getSession = () => {
        const sessionStr = sessionStorage.getItem('userSession');
        if(sessionStr !== null) {
            setSession(JSON.parse(sessionStr));
            navigate('/timer');
        } else {
            navigate('/', { replace: true })
        }
    }

    return (
        <AuthenticationContext.Provider value={{login, logout, session }}>{ children }</AuthenticationContext.Provider>
    )

}