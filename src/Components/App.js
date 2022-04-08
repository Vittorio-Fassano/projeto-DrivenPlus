import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import UserContext from '../Contexts/UserContext';

import Login from './Login';
import SignUp from './SignUp';
import Subscription from './Subscription';
import SubscriptionIdPlano from './SubscriptionIdPlano';
import Home from './Home';


function App() {
    const [token, setToken] = useState("");
    const [dadosPlano, setDadosPlano] = useState({});
    const [nomeUsuario, setNomeUsuario] = useState("");

    const contextValue = { token, setToken, dadosPlano, setDadosPlano, nomeUsuario, setNomeUsuario }

    return (
        <BrowserRouter>
            <UserContext.Provider value={contextValue}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/subscription' element={<Subscription />} />
                    <Route path='/subscription/:id_plano' element={<SubscriptionIdPlano />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
export default App;