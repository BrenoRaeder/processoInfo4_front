import styled from 'styled-components';

export const BookContainer = styled.div`
    height: 90vh;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgba(255, 255, 255, .9);
    text-align: center;
    outline: none;
    border: none;
    @media only screen and (max-width: 700px) {
        flex-direction: column;
        padding: 10px;
        justify-content: center;
        gap: 30px;
        height: 85vh;
    }
`;

export const BookInfo = styled.div`
    width: 60%;
    height: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    justify-content: center;

    img {
        margin: 0;
        max-height: 85vh;
        width: 45%;
    }

    h1{
        margin: 0;
        text-align: center;
    }


    @media only screen and (max-width: 700px) {
        width: 100%;
        height: auto;
        
        img {
            height: auto;
            width: 40%;
        }
    }
`;

export const BookStats = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 3vh;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    #highlight {
        font-size: 30px;
        font-weight: bold;
    }

    span {
        font-size: 25px;
        font-weight: 100;
    }

    @media only screen and (max-width: 700px) {
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
        #highlight {
            font-size: 20px;
        }

        span {
            font-size: 15px;
        }
    }
`;