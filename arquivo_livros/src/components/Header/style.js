import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 98%;
    padding: 0 10px;

    @media only screen and (max-width: 430px) {
        flex-direction: column-reverse;
        justify-content: center;
        gap: 30px;
        padding: 30px 0;
    }
`;

export const SearchBar = styled.div`
    display: flex;
    opacity: ${props => {
        let display = '';
        props.is_home ? display = '1' : display = '0';
        return display; 
    }};
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 10px;
    background: #fff;
    padding: 5px;
    transition: .2s;

    img {
        width: 20px;
        cursor: ${props => {
            let cursor = '';
            props.is_home ? cursor = 'pointer' : cursor = 'dafault';
            return cursor; 
        }};
        padding-top: 2px;
    }

    input {
        outline: none;
        border: none;
        padding: 8px;
        border-radius: 10px;
        cursor: ${props => {
            let cursor = '';
            props.is_home ? cursor = 'text' : cursor = 'default';
            return cursor; 
        }};
    }
`;

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
    img {
        width: 20px;
        cursor: pointer;
    }
`;

export const NavItem = styled.h3`
    margin: 0;
    cursor: pointer;
    height: 20px;
    display: flex;
    align-items: center;
    transition: .3s;
    font-size: 17px;
    border-bottom: ${ (props) => {
        let border = '';
        if(props.is_home)
            border = '2px solid var(--black);';
        else 
           border = '2px solid transparent;';
        
           return border;
    }};

    &:hover {
        border-bottom: 2px solid var(--black);
    }
`;