import {
    Container,
    ContainerImage,
    ContainerLogin,
    Form
} from './style.js';
import Button from '../../common/Button';
import { useState } from 'react';
import { api } from '../../services/api.js';

function Login() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState('password');

    async function doLogin() {
        await api.post('/login', {
            login: login,
            senha: senha
        }).then(resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <Container>
            <ContainerImage>
                <h1>
                    Bem-vindo ao seu arquivo de livros
                </h1>
                <h2>
                    Um lugar para registrar seus livros lidos. Faça login para relembrar e salvar suas leituras.
                </h2>
            </ContainerImage>
            <ContainerLogin>
                <Form>
                    <div>
                        <label htmlFor="#login">Login</label>
                        <input
                            id="login"
                            type="text"
                            placeholder="login"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="#senha">Senha</label>
                        <input
                            id="senha"
                            type={showPassword}
                            placeholder="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <div class="containerCheckbox">
                        <input
                            id="showPassword"
                            type="checkbox"
                            onChange={(e) => {
                                if(e.target.checked === true)
                                    setShowPassword('text');
                                else
                                    setShowPassword('password');
                            }}
                        />
                        <label htmlFor="#showPassword">Mostrar senha</label>
                    </div>

                </Form>

                <Button
                    onClick={() => doLogin()}
                    color="var(--white)"
                    background="var(--black)"
                    active={true}
                    text="Entrar"
                    width="50%"
                ></Button>
            </ContainerLogin>
        </Container>
    )
}

export default Login;