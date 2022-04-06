import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import styled from 'styled-components';

function SignUp() {
    return (
        <ContainerSignUp>
            <input type="name" placeholder='Nome'></input>
            <input type="number" placeholder='CPF'></input>
            <input type="email" placeholder='E-mail'></input>
            <input type="password" placeholder='Senha'></input>
            <button type='submit'>ENTRAR</button>
            <Link to='/'> <p>Já possui uma conta? Cadastre-se!</p> </Link>
        </ContainerSignUp>
    );
}

const ContainerSignUp = styled.div `
    margin: auto auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;

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
export default SignUp;