import styled from "@emotion/styled"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { FormEvent } from "react"

export const RegisterForm: React.FC = () => {

    const handleRegister = (formData: FormEvent<HTMLFormElement>) => {
        console.log(formData);
    }

    return(
        <>
            <Form onSubmit={handleRegister} name="register">
                <Title>Registrar</Title>
                <FormBody>
                    <Input name="name" type="text" text="Nombre: " placeholder="Escribe un nombre"/>
                    <Input name="surname" type="text" text="Apellidos: " placeholder="Escribe apellidos"/>
                    <Input name="email" type="email" text="Correo electrónico: " placeholder="Escribe tu correo electrónico"/>
                    <Input name="password" type="password" text="Contraseña: " placeholder="Escribe una contraseña"/>
                    <Input name="passwordRepeat" type="password" text="Repetir contraseña: " placeholder="Repite la contraseña"/>
                    <Button type='submit'>Registrar</Button>
                </FormBody>
            </Form>
        </>
    )

}

const Form = styled.form`
    width: 30%;
    margin: auto;
    border: none;
    border-radius: 12px;
    overflow: hidden;
    background-color: #FAFAFA;
    box-shadow: 1px 1px 20px #B6B6B6A5;
`

const Title = styled.h2`
    margin: 0px;
    color: white;
    background-color: var(--primary-color);
    padding: 20px;
`

const FormBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px 40px;
`