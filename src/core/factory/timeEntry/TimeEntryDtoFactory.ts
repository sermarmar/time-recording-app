import { TimeEntryDto } from '../../dtos/TimeEntryDto';
import { TimeEntry } from "../../model/TimeEntry";

export const TimeEntryDtoFactory = {
    create(model: TimeEntry): TimeEntryDto {
        return {
            id: model.id,
            workDay: model.work_day,
            startTime: model.start_time,
            endTime: model.end_time,
            userId: model.user_id
        }
    }
}