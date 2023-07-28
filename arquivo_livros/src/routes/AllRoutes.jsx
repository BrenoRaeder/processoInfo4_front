import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Header from '../components/Header';
import NewBook from '../pages/NewBook';

export function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Header} path="/">
                    <Route Component={Home} path="/" />
                    <Route Component={NewBook} path="/newbook" />
                </Route>

                <Route Component={Login} path="/login" />
            </Routes>
        </BrowserRouter>
    )
}