import { TimeEntryDto } from '../../dtos/TimeEntryDto';
import { TimeEntry } from "../../model/TimeEntry";

export const TimeEntryFactory = {
    create(model: TimeEntryDto): TimeEntry {
        return {
            work_day: model.workDay,
            start_time: model.startTime,
            end_time: model.endTime,
            user_id: model.userId
        }
    }
}