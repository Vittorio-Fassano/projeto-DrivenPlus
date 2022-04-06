import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import styled from 'styled-components';

import IconeSubsBr from '../Assets/images/IconeSubsBr.png';

function SubscriptionIdPlano() {
    return (
        <ContainerSubscriptionIdPlano>
            <ion-icon name="arrow-back-outline"></ion-icon>
            <img src={IconeSubsBr} alt="IconeSubsBr" />
            <h1>Driven Plus</h1>

            <ContainerBeneficioPreço>
                <ContainerBeneficios>
                    <ion-icon name="clipboard-outline"></ion-icon>
                    <p>Benefícios:</p>
                </ContainerBeneficios>
                <p>1. Brindes exclusivos</p>
                <p>2. Materiais bônus de web</p>
                <ContainerPreco>
                    <ion-icon name="cash-outline"></ion-icon>
                    <p>Preços:</p>
                </ContainerPreco>
                <p>R$ 39,99 cobrados mensalmente</p>
            </ContainerBeneficioPreço>

            <input type="name" placeholder='Nome impresso no cartão'></input>
            <input type="number" placeholder='Digitos do cartão'></input> 

            <ContainerInputs>
                <input type="number" placeholder='Código de segurança'></input> 
                <input type="text" placeholder='Validade'></input>       
            </ContainerInputs>
            
            <button type='submit'>ASSINAR</button>

        </ContainerSubscriptionIdPlano>
    );
}

const ContainerSubscriptionIdPlano = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;

    ion-icon {
        font-size: 45px;
        color: white;
        margin-top: 15px;
        margin-left: 25px;
        margin-bottom: 40px;
    }

    img {
        
        align-items: center;
        width: 139.38px;
        height: 95.13px;
        margin-left: 107px;
        margin-bottom: 15px;
    }

    h1 {
        font-size: 32px;
        font-family: 'Roboto', sans-serif;
        line-height: 38px;
        font-weight: 700;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin-bottom: 25px;
    }

    input {
        width: 299px;
        height: 52px;
        margin: auto auto;
        margin-bottom: 2px;
        margin-top: 8px;
        border: 1px solid #D4D4D4;
        border-radius: 8px;
        padding-left: 11px;
        background-color: #FFFFFF;
        color: #7E7E7E;
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
`;

const ContainerBeneficioPreço = styled.div`
    width: 301px;
    height: 120px;
    margin-left: 45px;
    margin-bottom: -3px;

    p {
        font-size: 14px;
        line-height: 16px;
        color: white;
    }
`

const ContainerBeneficios = styled.div`
    display: flex;
    margin-bottom: -35px;

    ion-icon {
        color: #FF4791;
        font-size: 15px;
        margin-top: 0px;
        margin-left: 0px;
        margin-right: 3px;
    }
    p {
        font-size: 16px;
        line-height: 16px;
        color: white;
    }
`;
const ContainerPreco = styled.div`
    display: flex;
    margin-bottom: -35px;
    margin-top: 15px;

    ion-icon {
        color: #FF4791;
        font-size: 15px;
        margin-top: 0px;
        margin-left: 0px;
        margin-right: 3px;
    }

    p {
        font-size: 16px;
        line-height: 16px;
        color: white;
    }
`;

const ContainerInputs = styled.div `
    display: flex;
    width: 299px;
    height: 52px;
    margin-left: 38px;
    margin-bottom: 10px;

    input {
        width: 148px;
        height: 52px;
        margin-bottom: 2px;
        margin-top: 8px;
        border: 1px solid #D4D4D4;
        border-radius: 8px;
        padding-left: 11px;
        background-color: #FFFFFF;
        color: #7E7E7E;
        padding-left: 11px;
    }       
`;

export default SubscriptionIdPlano;