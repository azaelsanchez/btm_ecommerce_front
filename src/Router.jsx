import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './containers/Main';
import Login from './containers/Login';
import Detalle from './containers/Detalle';
import Carrito from './containers/Carrito';
import Administrador from './containers/Administrador';
import Perfil from './containers/Perfil';
import Productos from './containers/Productos';



function Router() { 
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" exact component={Login} />
                <Route path="/detalle" exact component={Detalle} />
                <Route path="/carrito" exact component={Carrito} />
                <Route path="/administrador" exact component={Administrador} />
                <Route path="/perfil" exact component={Perfil} />
                <Route path="/productos" exact component={Productos} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;