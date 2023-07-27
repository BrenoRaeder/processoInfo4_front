import {
    Container,
    ContainerImage,
    ContainerLogin,
    Form
} from './style.js';
import Button from '../../common/Button';
import { useState } from 'react';
import { api } from '../../services/api.js';
import { useUser } from '../../contexts/UserContext.jsx';
import { setLocal } from '../../services/localStorage.js';

function Login() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState('password');
    const [loginFailed, setLoginFailed] = useState(false);


    async function doLogin() {
        await api.post('/login', {
            login: login,
            senha: senha
        }).then(resp => {
            console.log(resp);
            setLocal("userId", resp.data.idUsuario);
            window.location.href = "/home";
        }).catch(err => {
            console.log(err);
            if (err.request.status !== 200)
                setLoginFailed(true);
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
                <Form login_failed={loginFailed}>
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

                    <div className="containerCheckbox">
                        <input
                            id="showPassword"
                            type="checkbox"
                            onChange={(e) => {
                                if (e.target.checked === true)
                                    setShowPassword('text');
                                else
                                    setShowPassword('password');
                            }}
                        />
                        <label htmlFor="#showPassword">Mostrar senha</label>
                    </div>
                    {
                        loginFailed ?
                            <div className="failedMessage">Login ou senha inválido</div>
                            :
                            <div></div>
                    }

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