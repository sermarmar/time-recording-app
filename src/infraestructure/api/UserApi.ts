import { User } from "../../core/model/User";
import { supabase } from "../config/supabase"

export const UserApi = {
    
    save: async(user: User) => {
        const { data: users, error } = await supabase
        .from('users')
        .insert([user])
        .select();
        if(error !== null) {
            throw error;
        }

        const response: User = {
            id: users[0].id,
            name: users[0].name,
            surname: users[0].surname,
            email: users[0].email,
            password: users[0].password
        }

        return response;
    },
    login: async(email: string, pass: string) => {
        const { data: users, error } = await supabase
        .from('users')
        .select("*")
        .eq('email', email)
        .eq('password', pass)
        
        if(error !== null) {
            throw error;
        } else if(users === null) {
            throw new Error;
        }

        return map(users[0]);
    }

}

const map = (data): User => {
    return {
        id: data.id,
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password
    }
}