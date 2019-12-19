import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './containers/Main';
import Login from './components/Login';
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
                <Route path="/login" component={Login} />
                <Route path="/detalle" component={Detalle} />
                <Route path="/carrito" component={Carrito} />
                <Route path="/administrador" component={Administrador} />
                <Route path="/perfil" component={Perfil} />
                <Route path="/productos" component={Productos} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;