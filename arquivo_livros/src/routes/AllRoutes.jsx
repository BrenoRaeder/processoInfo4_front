import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Header from '../components/Header';

export function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Header} path="/">
                    <Route Component={Login} path="/" />
                    <Route Component={Home} path="/home" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}