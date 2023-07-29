import {
    Container
} from './style.js';
import Button from '../../common/Button';
import { useState } from 'react';
import { getLocal } from '../../services/localStorage.js';
import { api } from '../../services/api.js'

function NewBook() {

    const [name, setName] = useState('');
    const [pages, setPages] = useState(0);
    const [image, setImage] = useState('');
    const [startDate, setStartDate] = useState('');
    const [finishDate, setFinishDate] = useState('');

    const [valid, setValid] = useState(true);

    async function saveBook() {

        if (name === '' || image === '') {
            setValid(false);
        } else {
            let book = {
                imgCapa: image,
                nomeLivro: name,
                qtdPaginas: pages,
                dataComeco: startDate + "T12:02:21.373521Z",
                dataTermino: finishDate + "T12:02:21.373521Z",
                usuario: {
                    idUsuario: getLocal("userId")
                }
            }

            await api.post('/livro', book).then(res => {
                window.location.href = './';
            }).catch(err => {
                console.log(err);
                setValid(false);
            })
        }

    }

    return (
        <Container valid={valid}>
            <div className="name_pages">
                <div>
                    <label htmlFor="#name">Título</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Título"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="#pages">Páginas</label>
                    <input
                        id="pages"
                        type="number"
                        placeholder="0"
                        value={pages}
                        onChange={(e) => setPages(e.target.value)}
                    />
                </div>
            </div>
            <div className="image">
                <div>
                    <label htmlFor="#image">URL da imagem</label>
                    <input
                        id="image"
                        type="text"
                        placeholder="https://exemplo"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
            </div>
            <div className="dates">
                <div>
                    <label htmlFor="#start">Começo</label>
                    <input
                        id="start"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="#finish">Término</label>
                    <input
                        id="finish"
                        type="date"
                        value={finishDate}
                        onChange={(e) => setFinishDate(e.target.value)}
                    />
                </div>
            </div>
            {
                !valid ?
                    <div className="failedMessage">Campos inválidos</div>
                    :
                    <div></div>
            }
            <div className="save_button">
                <Button
                    onClick={() => { saveBook() }}
                    color="var(--white)"
                    background="#6db572"
                    active={true}
                    text="Salvar"
                    width="80px"
                ></Button>
            </div>
        </Container>
    )
}

export default NewBook;