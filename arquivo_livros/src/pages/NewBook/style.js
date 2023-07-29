import styled from 'styled-components';

export const Container = styled.div`
    padding: 100px 50px;
    display: flex; 
    flex-direction: column;
    gap: 20px;

    input {
        width: 100%;
        border-radius: 3px;
        padding: 10px 5px;
        transition: .3s;
        border: ${(props) => {
            let border;
            !props.valid ? border = '2px solid var(--red)' : border = '2px solid rgba(28,28,28, .2)';
            return border;
        }};
        background: #fff;
        outline-color: ${(props) => {
            let color;
            !props.valid ? color = color = 'var(--red)' : color = 'var(--black)';
            return color;
        }}
    }

    .name_pages {
        display: flex;
        gap: 20px;

        div:first-child {
            width: 90%;
        }
    }

    .dates {
        display: flex;
        gap: 20px;

        div {
            width: 50%;
        }
    }

    .save_button {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }

    .failedMessage {
        color: var(--red);
        transition: .3s;
        text-align: center;
        font-size: 20px;
    }
`;