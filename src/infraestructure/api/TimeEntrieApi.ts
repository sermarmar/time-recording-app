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

        const response: TimeEntry = {
            id: time_entries[0].id,
            workDay: time_entries[0].work_day,
            startTime: time_entries[0].start_time,
            endTime: time_entries[0].end_time,
            userId: time_entries[0].user_id
        }
        return response;
    },
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