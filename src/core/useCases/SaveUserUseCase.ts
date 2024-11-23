import { UserApi } from "../../infraestructure/api/UserApi";
import { UserDto } from "../dtos/UserDto";
import { UserFactory } from "../factory/user/UserFactory";
import { User } from "../model/User";

export const SaveUserUseCase = {
    async save(data: UserDto): Promise<UserDto> {
        const user: User = await UserApi.save(UserFactory.create(data));

        return user;
    }
}