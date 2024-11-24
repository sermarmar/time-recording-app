import { useEffect, useState } from "react"
import { AuthenticationContext } from "./AuthenticationContext"
import { SessionDto } from "../../../core/dtos/SessionDto";
import { LoginUseCase } from "../../../core/useCases/LoginUseCase";
import { useNavigate } from "react-router-dom";

interface AuthenticationProviderProps {
    children: React.ReactNode
}

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [session, setSession] = useState<SessionDto>();
    
    useEffect(() => {
        const sessionStr = sessionStorage.getItem('userSession');
        if(sessionStr !== null) {
            setSession(JSON.parse(sessionStr));
            navigate('/timeEntries', {replace: true});
        } else {
            navigate('/', { replace: true })
        }
    }, []);

    const login = (email: string, pass: string) => {
        LoginUseCase.login(email, pass);
        navigate('/timeEntries', {replace: true});
    }

    return (
        <AuthenticationContext.Provider value={{login , session }}>{ children }</AuthenticationContext.Provider>
    )

}