import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import UserContext from '../Contexts/UserContext';
import { useEffect } from "react";

import axios from "axios";
import styled from 'styled-components';

import IconeSubsBr from '../Assets/images/IconeSubsBr.png';

function SubscriptionIdPlano() {
    const params = useParams();
    console.log(params)

    const { token, setDadosPlano } = useContext(UserContext)
    console.log("token", token)
    const navigate = useNavigate();

    const [infoPlano, setInfoPlano] = useState({});

    const [infosSubscription, setInfosSubscription] = useState({ cardName: "", cardNumber: "", securityNumber: "", expirationDate: "" });

    const [showModal, setShowModal] = useState(false);

    function submitCard(e) {
        e.preventDefault();
        setShowModal(true);
        console.log(infosSubscription)
    }

    function confirmSubmit() {
        console.log(infosSubscription)
        const obj = {
            membershipId: params.id_plano,
            cardName: infosSubscription.cardName,
            cardNumber: infosSubscription.cardNumber,
            securityNumber: infosSubscription.securityNumber,
            expirationDate: infosSubscription.expirationDate,
        }

        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.post(URL, obj, config) ;
        promise.then(response => {
            const { data } = response;
            setDadosPlano(data)
            navigate("/home")
        })
        promise.catch(err => {
            alert("Erro ao assinar plano!")
        })
    }

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${params.id_plano}`
        console.log(URL)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(URL, config)
        promise.then(response => {
            const { data } = response
            setInfoPlano(data)
        })
        promise.catch(err => {
            console.log(err.response)
        })
    }, [])



    return infoPlano.perks === undefined ? <h1>Loading</h1> : (
        <ContainerSubscriptionIdPlano>
            <button className='botaonulo' onClick={() => navigate("/subscription")}>
                <ion-icon name="arrow-back-outline"></ion-icon>
            </button>
            <img src={infoPlano.image} alt="IconeSubs" />
            <h1>{infoPlano.name}</h1>

            <ContainerBeneficioPreço>
                <ContainerBeneficios>
                    <ion-icon name="clipboard-outline"></ion-icon>
                    <p>Benefícios:</p>
                </ContainerBeneficios>
                {infoPlano.perks.map(perk => <p>{perk.title}</p>)}
                <ContainerPreco>
                    <ion-icon name="cash-outline"></ion-icon>
                    <p>Preços:</p>
                </ContainerPreco>
                <p>R$ {infoPlano.price} cobrados mensalmente</p>
            </ContainerBeneficioPreço>

            <form onSubmit={submitCard}>
                <input
                    type="name"
                    placeholder='Nome impresso no cartão'
                    onChange={(e) => setInfosSubscription({ ...infosSubscription, cardName: e.target.value })}
                />
                <input
                    type="number"
                    placeholder='Digitos do cartão'
                    onChange={(e) => setInfosSubscription({ ...infosSubscription, cardNumber: e.target.value })}

                />
                <ContainerInputs>
                    <input
                        type="number"
                        placeholder='Código de segurança'
                        onChange={(e) => setInfosSubscription({ ...infosSubscription, securityNumber: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder='Validade'
                        onChange={(e) => setInfosSubscription({ ...infosSubscription, expirationDate: e.target.value })}
                    />
                </ContainerInputs>
                <button type='submit'>ASSINAR</button>
            </form>


            {showModal && 
                <ContainerFundoOpaco>
                    <ContainerModal>
                        <p>Tem certeza que deseja assinar o plano {infoPlano.name} (R$ {infoPlano.price})?</p>
                        <ContainerBotoes>
                            <button onClick={() => setShowModal(false)} className='botaoCinza'>Não</button>
                            <button onClick={() => confirmSubmit()} className='botaoRosa'>SIM</button>
                        </ContainerBotoes>
                    </ContainerModal>
                </ContainerFundoOpaco>}
        </ContainerSubscriptionIdPlano>
    );
}

const ContainerFundoOpaco = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;

const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 180px;
    margin-left: 5px;
    margin-right: 5px;
    margin-left: 35px;

    .botaoCinza {
        width: 95px;
        height: 52px;
        margin-right: 14px;
        background-color: #CECECE;
        color: #FFFFFF;
        border: none;
    }   

    .botaoRosa {
        width: 95px;
        height: 52px;
        background-color: #FF4791;
        color: #FFFFFF;
        border-radius: 8px;
        border: none;
    }
`;

const ContainerModal = styled.div`
    position:fixed;
    background: white;
    width: 248px;
    height: 210px;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 12px;

    p {
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        line-height: 21px;
        color: black;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`;

const ContainerSubscriptionIdPlano = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;

    form {
        justify-content: center;
        align-items: center;
        margin-left: 40px;
    }


    .botaonulo {
        margin-right: 400px;
        margin-bottom: 40px;
        width: 30px;
        height: 30px;
        background-color: black;
        border: none;
    }

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
    margin-bottom: 18px;

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

const ContainerInputs = styled.div`
    display: flex;
    width: 299px;
    height: 52px;
    margin-left: 0px;
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