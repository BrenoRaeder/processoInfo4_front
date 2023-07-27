import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';

export function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Login} path="/" />
                <Route Component={Home} path="/home" />
                {/* <Route Component={NotFound} path="*" /> */}
            </Routes>
        </BrowserRouter>
    )
}