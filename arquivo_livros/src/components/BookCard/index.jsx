import {
    BookContainer,
    BookInfo,
    BookStats
} from './style.js';
import { useEffect, useState } from 'react';
import { api } from '../../services/api.js';
import { getLocal } from '../../services/localStorage.js';

function BookCard() {

    const [livro, setLivro] = useState(null);

    useEffect(() => {
        async function getLivro() {
            await api.get(`/livro/${getLocal('bookId')}`).then(res => {
                setLivro(res.data);
            }).catch(err => {
                console.log(err);
            })
        }

        getLivro();
    }, []);

    return (
        <BookContainer>
            {
                livro === null ? <></> :
                    <>
                        <BookInfo>
                            <img src={livro?.imgCapa} alt="" />
                            <h1>{livro?.nomeLivro}</h1>
                        </BookInfo>
                        <BookStats>
                            <div>
                                <span>páginas</span>
                                <span id="highlight">{livro?.qtdPaginas}</span>
                            </div>
                            <div>
                                <span>começou</span>
                                <span id="highlight">{livro?.dataComeco.substring(0, 10)}</span>
                            </div>
                            <div>
                                <span>terminou</span>
                                <span id="highlight">{livro?.dataTermino.substring(0, 10)}</span>
                            </div>
                        </BookStats>
                    </>

            }
        </BookContainer>
    )
}

export default BookCard;