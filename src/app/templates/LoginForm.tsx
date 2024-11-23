import styled from "@emotion/styled"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { ChangeEvent, FormEvent, useState } from "react"

interface FormState {
    email: string
    password: string
}

export const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        email: '',
        password: ''
    });

    const handleChangeField = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData(prevData => ({...prevData, [name]: value}));
    }

    const handleRegister = (formEvent: FormEvent<HTMLFormElement>) => {
        formEvent.preventDefault();
        /*SaveUserUseCase.save(formData).then(data => {
            console.log(data);
            alert('Se ha registrado correctamente');
            setFormData({
                email: '',
                password: ''
            });
        }).catch(error => {
            console.log(error);
            alert('No se ha registrado correctamente. Vuelve a intentarlo');
        });*/
    }

    return(
        <>
            <Form onSubmit={handleRegister} name="register">
                <Title>Acceso</Title>
                <FormBody>
                    <Input name="email" type="email" text="Correo electrónico: " value={ formData.email } placeholder="Escribe tu correo electrónico" onChange={ handleChangeField }/>
                    <Input name="password" type="password" text="Contraseña: " value={ formData.password } placeholder="Escribe contraseña" onChange={ handleChangeField }/>
                    <Button type='submit'>Entrar</Button>
                    <Link href='/register'>Registrar</Link>
                </FormBody>
            </Form>
        </>
    )

}

const Form = styled.form`
    width: 26%;
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

const Link = styled.a`
    font-size: 15px;
    float: right;
    text-decoration: none;
    color: var(--primary-color);
`