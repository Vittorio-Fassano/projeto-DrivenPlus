import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import UserContext from '../Contexts/UserContext';

import axios from "axios";
import styled from 'styled-components';
import Logo from '../Assets/images/Logo.png'

function Login() {
    const {setToken} = useContext(UserContext)
    const navigate = useNavigate();

    const [infosLogin, setInfosLogin] = useState({emailLogin: "", passwordLogin: ""})

    const objLogin = {
        email: infosLogin.emailLogin,
        password: infosLogin.passwordLogin
    }

    function LoginUser (e) {
        e.preventDefault()

        const URLLOGIN =  "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login"
        const promise = axios.post(URLLOGIN, objLogin);
        
        promise.then(response => {
            const {data} = response;
            console.log("teste", data)
            setToken(data.token)
            navigate("/home(usuarioplus)");
        })
        promise.catch(err => {
            alert('Usuário inexiste ou usuário e senha incorretos!')
        })
    }

    return (
        <ContainerLogin>
            <img src={Logo} alt="logo" />
            <form onSubmit={LoginUser}>
                <input type="email" placeholder='E-mail' value={infosLogin.emailLogin} onChange={(e) => setInfosLogin({...infosLogin, emailLogin: e.target.value})} ></input>
                <input type="password" placeholder='Senha' value={infosLogin.passwordLogin} onChange={(e) => setInfosLogin({...infosLogin, passwordLogin: e.target.value})}></input> 
                <button type='submit'>ENTRAR</button>
            </form>
            <Link to='/sign-up'> <p>Não tem uma conta? Cadastre-se!</p> </Link>
        </ContainerLogin>
    );
}

const ContainerLogin = styled.div `
    margin: auto auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;

    form {
        justify-content: center;
        align-items: center;
        margin-left: 38px;
    }

    img {
        margin-top: 125px;
        margin-bottom: 80px;
    }

    input {
        width: 299px;
        height: 52px;
        margin: auto auto;
        margin-bottom: 8px;
        margin-top: 8px;
        border: 1px solid #D4D4D4;
        border-radius: 8px;
        padding-left: 11px;
        background-color: #FFFFFF;
        color: #7E7E7E;
        padding-left: 11px;
        
    }

    input::placeholder {
        color: #7E7E7E;
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
    }
    button {
        width: 299px;
        height: 52px;
        margin: auto auto;
        margin-bottom: 8px;
        margin-top: 8px;
        border: 1px solid #FF4791;;
        border-radius: 8px;
        padding-left: 11px;
        background-color: #FF4791;
        color: white;
        font-family: 'Roboto', sans-serif;
}
       
    p {
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: white;
        margin-top: 25px;
        margin-bottom: 150px;
    }
`;
export default Login;