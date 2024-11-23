import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginForm } from "../templates/LoginForm";
import { RegisterPage } from "../pages/RegisterPage";
import { TimeEntriesPage } from "../pages/TimeEntriesPage";

export const RouterProvider: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='/register' element={<RegisterPage />} />**
                <Route path='/timeEntries' element={<TimeEntriesPage />} />
            </Routes>
        </BrowserRouter>
    );

}