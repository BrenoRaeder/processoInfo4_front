import styled from 'styled-components';

export const ContainerButton = styled.button`
    justify-content: center; 
    background-color: ${(props) => {return props.background}};
    color: ${(props) => {return props.color}};
    width: ${(props) => {return props.width}};
    font-weight: bold;
    font-size: 15px;
    transition: .3s;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => {return props.background}};
    border-radius: 5px;
    padding: 10px 10px;
    margin: 8px 0;
    cursor: pointer;
    display: ${(props) => {
        let display = '';
        props.active ? display = 'flex' : display = 'none';
        return display;
    }};

    &:hover {
        background-color: ${(props) => {return props.color}};
        color: ${(props) => {return props.background}};
        border-color: ${(props) => {return props.background}};
    }
`;