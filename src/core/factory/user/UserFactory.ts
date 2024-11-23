import { UserDto } from '../../dtos/UserDto';
import { User } from '../../model/User';

export const UserFactory = {
    create(data: UserDto): User {
        return {
            name: data.name,
            surname: data.surname,
            email: data.email,
            password: data.password
        }
    }
}