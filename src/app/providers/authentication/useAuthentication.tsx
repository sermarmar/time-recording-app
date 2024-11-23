import { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext";

export const useAuthentication = () => {
    const context = useContext(AuthenticationContext);
    
    if(!context) {
        throw new Error("useAuthentication debe usarse dentro AuthenticationProvider");
    }
    return context;
}