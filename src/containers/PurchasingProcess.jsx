import React, { Component, Fragment } from 'react';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';


class PurchasingProcess extends Component{

    render(){
        return(
            <Fragment>
            <Header />
            <Cart/>
            <Footer />
            </Fragment>
            
        )
    }
}

export default PurchasingProcess;