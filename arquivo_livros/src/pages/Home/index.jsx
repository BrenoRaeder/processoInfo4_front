import {
    Container,
    ContainerUser,
    ContainerBooks,
    BookImage
} from './style.js';
import './style.css';
import { useUser } from '../../contexts/UserContext';
import ReactModal from 'react-modal';
import { useState } from 'react';

function Home() {

    const { user } = useUser();
    const [bookModal, setBookModal] = useState(false);


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
                                    <img src={user.imagemUsuario} alt="Imagem do usuario" />
                            }
                            <div className="user_info">
                                <h1>{user.login}</h1>
                                <h2>{user.nomeUsuario}</h2>
                                <div className="user_stats">
                                    <div>
                                        <span id="highlight">{user.totalLivros}</span>
                                        <span>Livros</span>
                                    </div>
                                    <div>
                                        <span id="highlight">{user.totalPaginas}</span>
                                        <span>Páginas</span>
                                    </div>
                                    <div>
                                        <span id="highlight">{user.ultimoLivro.substring(0, 10)}</span>
                                        <span>Última Leitura</span>

                                    </div>
                                </div>
                            </div>
                        </ContainerUser>

                        <div className="line"></div>



                        <ContainerBooks>
                            {
                                user.listaLivros.map(l => {
                                    return <BookImage 
                                                book_image={l.imgCapa}
                                                onClick={() => {setBookModal(true)}} />
                                })
                            }
                        </ContainerBooks>
                    </>

            }

            <ReactModal
                isOpen={bookModal}
                role={"dialog"}
                className= "modal"
            >
                <div className="closeModal" onClick={() => {setBookModal(false)}}>x</div>
            </ReactModal>
        </Container>
    )
}

export default Home;