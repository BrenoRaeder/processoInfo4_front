import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';

export function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Login} path="/" />

                {/* <Route Component={NotFound} path="*" /> */}
            </Routes>
        </BrowserRouter>
    )
}