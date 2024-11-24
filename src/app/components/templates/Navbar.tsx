import styled from "@emotion/styled";
import { useAuthentication } from "../../providers/authentication/useAuthentication";
import { Link, useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

export const Navbar: React.FC = () => {
    const { logout, session } = useAuthentication(); 
    const navigate = useNavigate();

    const hangleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <Nav>
            <h2>Registro de horas</h2>
            <NavList>
                <LinkStyle to='/timer'>Timer</LinkStyle>
                <LinkStyle to='/timeEntries'>Consulta de horas</LinkStyle>
                <LinkStyle to='#'>Vacaciones</LinkStyle>
            </NavList>
            <Auth>
                <span>{ session?.name + ' ' + session?.surname }</span>
                <Logout onClick={ hangleLogout }/>
            </Auth>
        </Nav>
    );

}

const Nav = styled.nav`
    background-color: var(--primary-color);
    padding: 2px 30px;
    border-radius: 7px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavList = styled.ul`
    display: flex;
    padding: 0;
    justify-content: center;
    gap: 40px;
    list-style: none;
`

const Auth = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const LinkStyle = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 5px 10px;
    border-radius: 7px;
    transition: all 0.5s ease-in-out;
    &:hover {
        background-color: #CE152D;
    }
`

const Logout = styled(FaPowerOff)`
    padding: 10px 10px;
    border-radius: 20px;
    transition: all 0.5s ease-in-out;
    &:hover {
        background-color: #CE152D;
    }
`
