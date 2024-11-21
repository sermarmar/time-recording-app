import styled from "@emotion/styled"

interface InputProps {
    name: string
    type: 'text' | 'number' | 'tel' | 'email' | 'password'
    text: string
    value?: string
    placeholder?: string
}

export const Input: React.FC<InputProps> = ({ name, type, text, value, placeholder }) => {

    return(
        <>
            <InputBox>
                <label htmlFor={ name }>{ text } </label>
                <Field type={ type } name={ name } value={ value } placeholder={ placeholder }/>
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