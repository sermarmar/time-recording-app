import { UserApi } from "../../infraestructure/api/UserApi";
import { Encryption } from "../../utils/Encryption";
import { UserDto } from "../dtos/UserDto";

export const LoginUseCase = {
    async save(data: UserDto) {
        data.password = Encryption.create(data.password);
        await UserApi.login(data.email, data.password).then(response => {
            sessionStorage.setItem('user', JSON.stringify(response.id))
        });
    }
}