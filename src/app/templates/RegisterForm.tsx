import styled from "@emotion/styled"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { ChangeEvent, FormEvent, useState } from "react"
import { SaveUserUseCase } from "../../core/useCases/SaveUserUseCase"

interface FormState {
    name: string
    surname: string
    email: string
    password: string
    passwordRepeat: string
}

export const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordRepeat: ''
    });

    const handleChangeField = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData(prevData => ({...prevData, [name]: value}));
    }

    /*const handleValidation = (event: ChangeEvent<HTMLInputElement>) => {
        const {name} = event.target;
        if(name === 'passwordRepeat' && formData.password !== formData.passwordRepeat) {
            setValidation(prevData => ({...prevData, [name]: false}));
        } else {
            setValidation(prevData => ({...prevData, [name]: true}));
        }
    }*/

    const handleRegister = (formEvent: FormEvent<HTMLFormElement>) => {
        formEvent.preventDefault();
        SaveUserUseCase.save(formData).then(data => {
            console.log(data);
            alert('Se ha registrado correctamente');
            setFormData({
                name: '',
                surname: '',
                email: '',
                password: '',
                passwordRepeat: ''
            });
        }).catch(error => {
            console.log(error);
            alert('No se ha registrado correctamente. Vuelve a intentarlo');
        });
        /*if(formData.password !== formData.passwordRepeat) {
            setValidation(prevData => (prevData.passwordRepeat.error = true));
        } else {
            setValidation(prevData => ({...prevData, 'passwordRepeat': true}));
        }*/
        //console.log(formData.currentTarget.);
    }

    return(
        <>
            <Form onSubmit={handleRegister} name="register">
                <Title>Registrar</Title>
                <FormBody>
                    <Input name="name" type="text" text="Nombre: " value={ formData.name } placeholder="Escribe un nombre" onChange={ handleChangeField } />
                    <Input name="surname" type="text" text="Apellidos: " value={ formData.surname } placeholder="Escribe apellidos" onChange={ handleChangeField } />
                    <Input name="email" type="email" text="Correo electrónico: " value={ formData.email } placeholder="Escribe tu correo electrónico" onChange={ handleChangeField }/>
                    <Input name="password" type="password" text="Contraseña: " value={ formData.password } placeholder="Escribe una contraseña" onChange={ handleChangeField }/>
                    <Input name="passwordRepeat" type="password" text="Repetir contraseña: " value={ formData.passwordRepeat } placeholder="Repite la contraseña" onChange={ handleChangeField }/>
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