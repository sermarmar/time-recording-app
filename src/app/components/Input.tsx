import styled from "@emotion/styled"
import { ChangeEventHandler } from "react"

interface InputProps {
    name: string
    type: 'text' | 'number' | 'tel' | 'email' | 'password'
    text: string
    value?: string
    placeholder?: string
    onChange?: ChangeEventHandler
    onBlur?: ChangeEventHandler
    messageError?: string
}

export const Input: React.FC<InputProps> = ({ name, type, text, value, placeholder, onChange, onBlur, messageError }) => {

    return(
        <>
            <InputBox>
                <label htmlFor={ name }>{ text } </label>
                <Field type={ type } name={ name } value={ value } placeholder={ placeholder } onChange={ onChange } onBlur={ onBlur }/>
                <MessageError>{ messageError }</MessageError>
            </InputBox>
        </>
    )

} 

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 30px;
    font-size: 15px;
`

const Field = styled.input`
    border-radius: 5px;
    border: 1px solid #B6B6B6;
    padding: 10px 15px;
    font-size: 15px;
`

const MessageError = styled.span`
    font-size: 12px;
    color: var(--primary-color);
`