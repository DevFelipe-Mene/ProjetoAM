import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Detalhes from "./pages/detalhes/Detalhes";
import Account from "./pages/account/Account";
import Main from "./components/main/Main";


export default () =>{

    return(

        <Switch>
            <Route exact path="/">
                <Main/>
            </Route>
            <Route exact path="/detalhes">
                <Detalhes/>
            </Route>
            
            <Route exact path="/account">
                <Account/>
            </Route>
        </Switch>

    );

};