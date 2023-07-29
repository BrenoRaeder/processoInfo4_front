import {
    Container,
    SearchBar,
    NavBar,
    NavItem
} from './style.js';
import { Outlet, useNavigate, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useUser } from '../../contexts/UserContext';
import { setLocal } from '../../services/localStorage.js';

function Header() {

    const location = useLocation();
    const navigate = useNavigate();
    const [isHome, setIsHome] = useState(true);
    const [search, setSearch] = useState('');

    const { userBooks } = useUser();
    const { setUserBooksFiltered } = useUser();

    useEffect(() => {
        if(location.pathname === '/') 
            setIsHome(true)
        else
            setIsHome(false)
    }, [])

    function doSearch() {
        setUserBooksFiltered(userBooks.filter(userBooks => userBooks.nomeLivro.toLowerCase().includes(search)));
        if(search === '') 
            setUserBooksFiltered(userBooks);
    }

    function goTo(url) {
        if(url === '/')
            setIsHome(true);
        else 
            setIsHome(false);
        navigate(url);
    }
 
    function logout() {
        setLocal('userId', null);
        navigate('/login');
    }
    return (
        <>
            <Container>
                <SearchBar is_home={isHome}>
                    <input 
                        type="text"
                        id="search_bar"
                        placeholder="pesquisar"
                        onChange={(e) => {setSearch(e.target.value.toLowerCase()); doSearch();}} 
                    />
                    <label onClick={() => {doSearch()}}>
                        <img src="./src/assets/search.png" alt="Barra de pesquisa" />
                    </label>
                </SearchBar>

                <NavBar>
                    <NavItem onClick={() => goTo('/')} is_home={isHome}>Home</NavItem>
                    <NavItem onClick={() => goTo('/newbook')} is_home={!isHome}>Cadastro</NavItem>
                    <img src="./src/assets/logout.png" onClick={() => logout()}/>
                </NavBar>
            </Container>
            <Outlet />
        </>

    )
}

export default Header;