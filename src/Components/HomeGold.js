import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


import axios from "axios";
import styled from 'styled-components';

import  MiniIconAm from '../Assets/images/MiniIconAm.png';


function HomeGold() {
    return (
        <ContainerHome>
           <ContainerTopo>
            <img src={MiniIconAm} alt="MiniIconAm" />
            <ion-icon name="person-circle-outline"></ion-icon>
           </ContainerTopo>
           <h1>Olá, Fulano</h1>
           <button type='submit'>Solicitar brindes</button>
           <button type='submit'>Materiais bônus de web</button>
           <button type='submit'>Aulas bônus de tech</button>
           
           <ContainerButtonFixed>
           <button type='submit'>Mudar plano</button>
           <button className = "cancelar" type='submit'>Cancelar plano</button>
           </ContainerButtonFixed>
        </ContainerHome>
    );
}

const ContainerHome = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;

    h1 {
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        line-height: 28px;
        font-weight: 700;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin-bottom: 45px;
        margin-top: 23px;
    }

    button {
        width: 299px;
        height: 52px;
        margin: auto auto;
        margin-bottom: 8px;
        margin-top: 0px;
        border: 1px solid #FF4791;;
        border-radius: 8px;
        padding-left: 11px;
        background-color: #FF4791;
        color: white;
        font-family: 'Roboto', sans-serif;
    }
`;

const ContainerButtonFixed = styled.div `
    position: fixed;
    bottom: 0;
    margin-left: 38px;
    margin-bottom: 10px;

    .cancelar {
        background-color: #FF4747;
    }
`;

const ContainerTopo = styled.div `
    display: flex;
    justify-content: space-between;

    img {
        margin-top: 32px;
        margin-left: 38px;
    }

    ion-icon {
        color: white;
        font-size: 35px;
        margin-top: 22px;
        margin-right: 22px;
    }

`;
export default HomeGold;