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
            text-align: center;
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

    @media only screen and (max-width: 700px) {
        img {
            width: 80px;
            height: 80px;
        }
    }

    @media only screen and (max-width: 600px) {
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;

        .user_info {
            align-items: center;
        }
    }

    @media only screen and (max-width: 400px) {
        .user_stats{
            #highlight {
                font-size: 15px;
            }

            span {
                font-size: 10px;
            }
        }

        img {
            width: 50px;
            height: 50px;
        }
    }
`;

export const ContainerBooks = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    width: 80%;
    margin: auto;
    justify-content: space-between;
    gap: 30px;

    @media only screen and (max-width: 700px) {
        grid-template-columns: auto;
        justify-content: center;
    }
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

    @media only screen and (max-width: 700px) {
        width: 60vw;
        height: 84vw;
    }
`;

