import { User } from "../../core/model/User";
import { supabase } from "../config/supabase"

export const UserApi = {
    
    save: async(user: User) => {
        const { data, error } = await supabase
        .from('users')
        .insert([user])
        .select();
        if(error !== null) {
            throw error;
        }

        const response: User = {
            id: data[0].id,
            name: data[0].name,
            surname: data[0].surname,
            email: data[0].email,
            password: data[0].password
        }

        return response;
    },
    login: async(email: string, pass: string) => {
        const { data, error } = await supabase
        .auth.signUp({
            email: email,
            password: pass
        });
        if(error !== null) {
            throw error;
        } else if(data.user === null) {
            throw new Error;
        }

        return data.user;
    }

}