import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

export const ContainerImage = styled.div`
    width: 50%;
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        background: var(--black);
        color: var(--white);
        font-size: 30px;
        font-weight: bold;
        padding: 10px;
        width: 90%;
        text-align: center;
        border-radius: 5px;
    };

    h2 {
        background: var(--black);
        color: var(--white);
        font-size: 17px;
        font-weight: 100;
        text-align: center;
        padding: 10px;
        width: 70%;
        border-radius: 5px;
    }
`;

export const ContainerLogin = styled.div`
    width: 50%;
    height: 70vh;
    margin: 14vh auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 70%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    gap: 15px;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }

    .containerCheckbox {
        flex-direction: row;

        input {
            width: 20px;
            cursor: pointer;
        };

        label {
            font-weight: 100;
            font-size: 15px;
        };
    }

    input {
        width: 100%;
        border-radius: 3px;
        padding: 10px 5px;
        border: 1px solid rgba(28,28,28, .6);
        background: #fff;
    }

`;