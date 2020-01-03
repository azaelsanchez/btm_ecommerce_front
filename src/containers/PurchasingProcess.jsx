import React, { Component, Fragment } from 'react';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderDetailToMake from '../components/OrderDetailToMake';
//import DirectionForm from '../components/DirectionsForm'
import Button from '../components/Button';
import { Link } from 'react-router-dom';

class PurchasingProcess extends Component{

    render(){
        return(
            <Fragment>
                <Header />
                <h3>Detalles del pedido</h3>
                <OrderDetailToMake/>
                <h3>Dirección del pedido</h3>
                {/*<DirectionForm/>*/}
                <p>Comprar</p>
                <Button/>
                <Link to={'/OrderDetail'}> Detalle Pedido</Link>
                <Footer />
            </Fragment>
        )
    }
}

export default PurchasingProcess;