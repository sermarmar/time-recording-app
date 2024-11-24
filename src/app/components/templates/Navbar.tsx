import styled from "@emotion/styled";
import { useAuthentication } from "../../providers/authentication/useAuthentication";

export const Navbar: React.FC = () => {
    const { session } = useAuthentication(); 

    return (
        <Nav>
            <h2>Registro de horas</h2>
            <NavList>
                <li>Timer</li>
                <li>Consulta de horas</li>
                <li>Vacaciones</li>
            </NavList>
            <span>{ session?.name + ' ' + session?.surname }</span>
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
