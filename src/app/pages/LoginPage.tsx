import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/templates/LoginForm"
import { useAuthentication } from "../providers/authentication/useAuthentication"

export const LoginPage: React.FC = () => {
    const session = useAuthentication();
    const navigate = useNavigate();

    if(session) navigate('/timer');

    return(
        <LoginForm />
    )
}