import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 98vw;
    padding: 50px 0;

    .line {
        width: 60%;
        margin: 50px auto;
        border-top: 1px solid rgba(28, 28, 28, .3);
    } 
`;

export const ContainerUser = styled.div`
    display: flex;
    gap: 40px;

    .user_info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }

    .user_stats {
        display: flex;
        flex-direction: row;
        gap: 30px;
        padding-top: 10px;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }

        #highlight {
            font-size: 20px;
            font-weight: bold;
        }

        span {
            font-size: 14px;
            font-weight: 100;
        }
    }

    img {
        width: 160px;
        border-radius: 3px;
        box-shadow: 1px 1px 10px rgba(28, 28, 28, .7);
    }

    h1, h2 {
        margin: 0;
    }

    h2 {
        font-weight: 100;
    }
`;

export const ContainerBooks = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    width: 80%;
    margin: auto;
    justify-content: space-between;

`;

export const BookImage = styled.div`
    width: 20vw;
    height: 28vw;
    background-image: ${(props) => {
        return `url(${props.book_image})`
    }};
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: .5s;
    box-shadow: 1px 1px 10px rgba(28, 28, 28, .3);
    border-radius: 5px;

    &:hover {
        box-shadow: 5px 5px 10px rgba(28, 28, 28, .9);
    }
`;

