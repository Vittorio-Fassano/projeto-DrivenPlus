import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import UserContext from '../Contexts/UserContext';


import axios from "axios";
import styled from 'styled-components';

import SubscriptionIdPlano from './SubscriptionIdPlano';
import IconeSubsBr from '../Assets/images/IconeSubsBr.png';
import IconeSubsAm from '../Assets/images/IconeSubsAm.png';
import IconeSubsVr from '../Assets/images/IconeSubsVr.png';


function Subscription() {
    const { token } = useContext(UserContext)
    const navigate = useNavigate();

    const obj = {

    }






    return (
        <ContainerSubscription>
            <h1>Escolha seu Plano</h1>
            <ContainerPlanoBranco>
                <button>
                    <img src={IconeSubsBr} alt="IconeSubsBr" />
                    <p>R$ 39,99</p>
                </button>
            </ContainerPlanoBranco>
        
            <ContainerPlanoAmarelo>
                <button>
                    <img src={IconeSubsAm} alt="IconeSubsAm" />
                    <p>R$ 69,99</p>
                </button>
            </ContainerPlanoAmarelo>

            <ContainerPlanoVerde>
                <button>
                    <img src={IconeSubsVr} alt="IconeSubsVr" />
                    <p>R$ 99,99</p>
                </button>
            </ContainerPlanoVerde>
        </ContainerSubscription>
    );
}

const ContainerSubscription = styled.div`
    margin: auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;

    h1 {
        font-size: 32px;
        font-family: 'Roboto', sans-serif;
        line-height: 38px;
        font-weight: 700;
        text-align: center;
        color: white;
        margin-top: 29px;
        margin-bottom: 18px;
    }
`;

const ContainerPlanoBranco = styled.div`
    p {
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        line-height: 28px;
        font-weight: 700;
        text-align: center;
        color: white;
        margin-top: 29px;
        margin-bottom: 24px;
        margin-right: 3px;
    }

    img {
        margin-left: 3px;
    }

    button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 290px;
        height: 180px;
        border: 3px solid #7E7E7E;
        border-radius: 10px;
        margin-bottom: 10px;
        background-color: #0E0E13;
    }
`;

const ContainerPlanoAmarelo = styled.div`
    p {
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        line-height: 28px;
        font-weight: 700;
        text-align: center;
        color: white;
        margin-top: 29px;
        margin-bottom: 24px;
        margin-right: 3px;
    }

    img {
        margin-left: 3px;
    }

    button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 290px;
        height: 180px;
        border: 3px solid #7E7E7E;
        border-radius: 10px;
        margin-bottom: 10px;
        background-color: #0E0E13;
    }
`;

const ContainerPlanoVerde = styled.div`
    p {
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        line-height: 28px;
        font-weight: 700;
        text-align: center;
        color: white;
        margin-top: 29px;
        margin-bottom: 24px;
        margin-right: 3px;
    }

    img {
        margin-left: 3px;
    }

    button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 290px;
        height: 180px;
        border: 3px solid #7E7E7E;
        border-radius: 10px;
        margin-bottom: 10px;
        background-color: #0E0E13;
    }
`;

export default Subscription;