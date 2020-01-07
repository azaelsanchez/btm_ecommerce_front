import React, { Component, Fragment } from 'react';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderDone from '../components/OrderDone';

class orderDetail extends Component{

    render(){
        return(
            <Fragment>
                <Header />
                <OrderDone/>
                <Footer />
            </Fragment>
            
        )
    }
}

export default orderDetail;