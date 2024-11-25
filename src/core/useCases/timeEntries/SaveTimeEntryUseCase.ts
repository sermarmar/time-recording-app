import { TimeEntryApi } from "../../../infraestructure/api/TimeEntrieApi";
import { TimeEntryDto } from "../../dtos/TimeEntryDto";
import { TimeEntryFactory } from "../../factory/timeEntry/TimeEntryFactory";
import { TimeEntryDtoFactory } from "../../factory/timeEntry/TimeEntryDtoFactory";
import { TimeEntry } from "../../model/TimeEntry";

export const SaveTimeEntryUseCase = {
    async save(data: TimeEntryDto): Promise<TimeEntryDto> {
        const timeEntry: TimeEntry = await TimeEntryApi.save(TimeEntryFactory.create(data));

        return TimeEntryDtoFactory.create(timeEntry);
    }
}