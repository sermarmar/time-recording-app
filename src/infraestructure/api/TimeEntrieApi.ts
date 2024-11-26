import { TimeEntry } from "../../core/model/TimeEntry";
import { supabase } from "../config/supabase";

export const TimeEntryApi = {

    save: async(timeEntry: TimeEntry) => {
        const { data: time_entries, error } = await supabase
        .from('time_entries')
        .insert([timeEntry])
        .select()
        if(error !== null) {
            throw error;
        } 
        return time_entries[0];
    },
    getTimeEntries: async () => {
        const { data , error } = await supabase
        .from('time_entries')
        .select();
        if(error !== null) {
            throw error; 
        }
        return data;
    },
    getTimeEntriesById: async (id: number) => {
        const { data , error } = await supabase
        .from('time_entries')
        .select()
        .eq('user_id', id);
        if(error !== null) {
            throw error; 
        }
        return data;
    },

}