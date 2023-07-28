import {
    Container,
    SearchBar,
    NavBar
} from './style.js';
import { Outlet, useNavigate } from 'react-router-dom';

function Header() {
    return (
        <>
            <Container>
                navbar bolada demias
            </Container>
            <Outlet />
        </>

    )
}

export default Header;