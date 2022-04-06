import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import styled from 'styled-components';

function SignUp() {
    const [infosRegister, setInfoRegister] = useState({ email: "", name: "", cpf: "", password: "" });
    const obj = {
        email: infosRegister.email,
        name: infosRegister.name,
        cpf: infosRegister.cpf,
        password: infosRegister.password
    }
    const navigate = useNavigate();

    function RegisterNewUser(e) {
        e.preventDefault()
        
        const POSTURLREGISTER = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";
        const promise = axios.post(POSTURLREGISTER, obj);

        promise.then(response => {
            const { data } = response;
            navigate("/subscription")
        })
        promise.catch(err => {
            alert("Erro ao registrar um novo usuário!")
        })
    }

    return (
        <ContainerSignUp>
            <ContainerInputsSU>
                <form onSubmit={RegisterNewUser}>
                    <input type="name" placeholder='Nome' value={infosRegister.name} onChange={(e) => setInfoRegister({...infosRegister, name: e.target.value})}></input>
                    <input type="" placeholder='CPF' value={infosRegister.cpf} onChange={(e) => setInfoRegister({...infosRegister, cpf: e.target.value})}></input>
                    <input type="email" placeholder='E-mail' value={infosRegister.email} onChange={(e) => setInfoRegister({...infosRegister, email: e.target.value})}></input>
                    <input type="password" placeholder='Senha' value={infosRegister.password} onChange={(e) => setInfoRegister({...infosRegister, password: e.target.value})}></input>
                    <button type='submit'>ENTRAR</button>
                </form>
            </ContainerInputsSU>
            <Link to='/'> <p>Já possui uma conta? Cadastre-se!</p> </Link>
        </ContainerSignUp>
    );
}

const ContainerSignUp = styled.div`
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

const ContainerInputsSU = styled.div`
    margin-top: 119px;
    margin-left: 38px;
`;

export default SignUp;