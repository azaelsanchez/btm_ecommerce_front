import React, { Component, Fragment } from 'react';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderDetailDone from '../components/OrderDetailDone';
import Direction from '../components/Direction';

class orderDetail extends Component{

    render(){
        return(
            <Fragment>
            <Header />
            <OrderDetailDone/>
            <Direction/>
            <Footer />
            </Fragment>
            
        )
    }
}

export default orderDetail;