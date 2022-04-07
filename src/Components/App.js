import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import UserContext from '../Contexts/UserContext';

import Login from './Login';
import SignUp from './SignUp';
import Subscription from './Subscription';
import SubscriptionIdPlano from './SubscriptionIdPlano';
import HomePlus from './HomePlus';
import HomeGold from './HomeGold';
import HomePlatinum from './HomePlatinum';


function App() {
    const [token, setToken] = useState("");
    const contextValue = { token, setToken }

    return (
        <BrowserRouter>
            <UserContext.Provider value={contextValue}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/subscription' element={<Subscription />} />
                    <Route path='/subscription/ID_DO_PLANO' element={<SubscriptionIdPlano />} />
                    <Route path='/home(usuarioplus)' element={<HomePlus />} />
                    <Route path='/home(usuariogold)' element={<HomeGold />} />
                    <Route path='/home(usuarioplatinum)' element={<HomePlatinum />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
export default App;