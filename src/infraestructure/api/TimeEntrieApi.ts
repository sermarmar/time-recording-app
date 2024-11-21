import { supabase } from "../config/supabase";

export const TimeEntryApi = {
    
    getTimeEntries: async () => {
        const { data , error } = await supabase
        .from('time_entries')
        .select();
        if(error !== null) {
            throw error; 
        }
        return data;
    }

}