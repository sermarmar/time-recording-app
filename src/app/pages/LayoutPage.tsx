import { Outlet, useNavigate } from "react-router-dom"
import { Navbar } from "../components/templates/Navbar"
import { useAuthentication } from "../providers/authentication/useAuthentication";

export const LayoutPage: React.FC = () => {
    const { session } = useAuthentication();
    const navigate = useNavigate();

    if(!session) navigate('/');

    return(
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}