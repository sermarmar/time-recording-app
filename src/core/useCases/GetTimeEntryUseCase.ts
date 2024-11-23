import { TimeEntryApi } from '../../infraestructure/api/TimeEntrieApi';
import { TimeEntryDto } from '../dtos/TimeEntryDto';
import { TimeEntryDtoFactory } from '../factory/timeEntry/TimeEntryDtoFactory';
import { TimeEntry } from '../model/TimeEntry';

export const GetTimeEntryUseCase = {
    async findAll(): Promise<TimeEntryDto[]>{
        const timeEntries: TimeEntry[] = await TimeEntryApi.getTimeEntries();

        return timeEntries.map(timeEntry => TimeEntryDtoFactory.create(timeEntry));
    }
}