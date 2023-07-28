import {
    Container,
    ContainerUser,
    ContainerBooks,
    BookImage
} from './style.js';
import './style.css';
import BookCard from '../../components/BookCard'
import { useUser } from '../../contexts/UserContext';
import ReactModal from 'react-modal';
import { useState } from 'react';
import { setLocal } from '../../services/localStorage.js';

function Home() {

    const { user } = useUser();
    const { userBooksFiltered } = useUser();
    const [bookModal, setBookModal] = useState(false);

    function openModal(id) {
        setLocal('bookId', id);
        setBookModal(true);
        console.log(userBooksFiltered);
    }

    return (
        <Container>
            {
                user === undefined ? <></>
                    :
                    <>
                        <ContainerUser>
                            {
                                user.imagemUsuario === null ? <></>
                                    :
                                    <img src={user?.imagemUsuario} alt="Imagem do usuario" />
                            }
                            <div className="user_info">
                                <h1>{user?.login}</h1>
                                <h2>{user?.nomeUsuario}</h2>
                                <div className="user_stats">
                                    <div>
                                        <span id="highlight">{user?.totalLivros}</span>
                                        <span>Livros</span>
                                    </div>
                                    <div>
                                        <span id="highlight">{user?.totalPaginas}</span>
                                        <span>Páginas</span>
                                    </div>
                                    <div>
                                        <span id="highlight">{user?.ultimoLivro.substring(0, 10)}</span>
                                        <span>Última Leitura</span>
                                    </div>
                                </div>
                            </div>
                        </ContainerUser>

                        <div className="line"></div>



                        <ContainerBooks>
                            {
                                userBooksFiltered.map(l => {
                                    return <BookImage
                                                key={l.idLivro} 
                                                book_image={l.imgCapa}
                                                onClick={() => openModal(l.idLivro)} />
                                })
                            }
                        </ContainerBooks>
                    </>

            }

            <ReactModal
                isOpen={bookModal}
                role={"dialog"}
                className= "modal"
                ariaHideApp={false}
                disableAutoFocus={true}
            >
                <div className="closeModal" onClick={() => {setBookModal(false)}}>x</div>
                <BookCard></BookCard>
            </ReactModal>
        </Container>
    )
}

export default Home;