import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';
import { useContext } from "react";



import axios from "axios";
import styled from 'styled-components';

import  MiniIconBr from '../Assets/images/MiniIconBr.png';


function Home() {
    const navigate = useNavigate()
    const { dadosPlano, token, nomeUsuario} = useContext(UserContext)
    console.log("telahome", dadosPlano)


    function cancelarPlano() {
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.delete(URL, config) ;
        promise.then(response => {
            console.log("planocacelado")
            navigate("/subscription")
        })
        promise.catch(err => {
            alert("Erro ao cancelar plano!")
        })
    }

    return (
        <ContainerHome>
           <ContainerTopo>
            <img src={dadosPlano.membership.image} alt="imagemplano" />
            <ion-icon name="person-circle-outline"></ion-icon>
           </ContainerTopo>
           <h1>Olá, {nomeUsuario}</h1>
           {dadosPlano.membership.perks.map(perk => <a href={perk.link}><button type='submit'>{perk.title}</button></a>)}
           <ContainerButtonFixed>
           <button type='submit' onClick={() => navigate("/subscription")} >Mudar plano</button>
           <button className = "cancelarplano" type='submit' onClick={() => cancelarPlano()} >Cancelar plano</button>
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

    a {
        margin-left: 40px;
    }

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

    .cancelarplano {
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
export default Home;