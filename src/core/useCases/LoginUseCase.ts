import { UserApi } from "../../infraestructure/api/UserApi";
import { Encryption } from "../../utils/Encryption";

export const LoginUseCase = {
    async login(email: string, pass: string) {
        await UserApi.login(email, Encryption.create(pass)).then(response => {
            sessionStorage.setItem('user', JSON.stringify(response))
        });
    }
}