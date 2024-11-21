import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

interface ButtonProps {
    children: string
    type?: 'submit' | 'reset' | 'button' 
    onClick?: MouseEventHandler
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, type, onClick, disabled }) => {

    const ButtonStyle = styled.button`
        padding: 10px 20px;
        font-size: 20px;
        background-color: var(--primary-color);
        border: none;
        border-radius: 7px;
        color: white;
        width: max-content;
        &:hover {
            background-color: #CE152D;
        }
        &:active {
            background-color: #681217;
        }
    `

    return(
        <>
            <ButtonStyle type={ type } onClick={ onClick } disabled={ disabled }>{ children }</ButtonStyle>
        </>
    );

}