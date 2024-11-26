import { useEffect, useState } from "react";
import { TimeEntryDto } from "../../../core/dtos/TimeEntryDto";
import { useAuthentication } from "../../providers/authentication/useAuthentication";
import { GetTimeEntryUseCase } from "../../../core/useCases/timeEntries/GetTimeEntryUseCase";

export const TimeEntriesList: React.FC = () => {
    const { session } = useAuthentication();
    const [timeEntries, setTimeEntries] = useState<TimeEntryDto[]>([]);

    useEffect(() => {
      //GetTimeEntryUseCase.findAll()
    
      
    }, []);
    

    return(
        <></>
    );
}