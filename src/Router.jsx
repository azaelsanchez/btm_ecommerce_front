import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './containers/Home';
import LoginPage from './containers/LoginPage';
import Products from './containers/Products';
import ProductDetail from './containers/ProductDetail';
import OrderDetail from './containers/OrderDetail';
import PurchasingProcess from './containers/PurchasingProcess';
import Profile from './containers/Profile';
import Buscador from './containers/Busqueda'




function Router() { 
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/products" exact component={Products} />
                <Route path="/productDetail" exact component={ProductDetail} />
                <Route path="/orderDetail" exact component={OrderDetail} />
                <Route path="/purchasingProcess" exact component={PurchasingProcess} />
                <Route path="/profile" exact component={Profile} />  
                <Route path="/Buscador" exact component={Buscador}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;