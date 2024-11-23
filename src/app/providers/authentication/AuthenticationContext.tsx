import { createContext } from "react";
import { SessionDto } from "../../../core/dtos/SessionDto";

interface AuthenticationContextProps {
    login(email: string, pass: string): void
    session: SessionDto | undefined
}

export const AuthenticationContext = createContext<AuthenticationContextProps | undefined>(undefined);