import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage";
import { TimeEntriesPage } from "../pages/TimeEntriesPage";
import { AuthenticationProvider } from "../providers/authentication/AuthenticatonProvider";
import { LoginPage } from "../pages/LoginPage";
import { LayoutPage } from "../pages/LayoutPage";
import { TimerPage } from "../pages/TimerPage";

export const RouterProvider: React.FC = () => {

    return (
        <BrowserRouter>
            <AuthenticationProvider>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route element={<LayoutPage/>}>
                        <Route path='/timer' element={<TimerPage />} />
                        <Route path='/timeEntries' element={<TimeEntriesPage />} />
                    </Route>
                </Routes>
            </AuthenticationProvider> 
        </BrowserRouter>
    );

}