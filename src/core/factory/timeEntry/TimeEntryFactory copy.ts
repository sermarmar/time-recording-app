import { TimeEntryDto } from '../../dtos/TimeEntryDto';
import { TimeEntry } from "../../model/TimeEntry";

export const TimeEntryFactory = {
    create(model: TimeEntryDto): TimeEntry {
        return {
            id: model.id,
            workDay: model.workDay,
            startTime: model.startTime,
            endTime: model.endTime,
            userId: model.userId
        }
    }
}