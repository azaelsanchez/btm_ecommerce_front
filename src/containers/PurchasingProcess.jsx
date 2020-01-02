import React, { Component, Fragment } from 'react';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderDetailToMake from '../components/OrderDetailToMake';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

class PurchasingProcess extends Component{

    render(){
        return(
            <Fragment>
                <Header />
                <OrderDetailToMake/>
                <p>Comprar</p>
                <Button/>
                <Link to={'/OrderDetail'}> Detalle Pedido</Link>
                <Footer />
            </Fragment>
            
        )
    }
}

export default PurchasingProcess;