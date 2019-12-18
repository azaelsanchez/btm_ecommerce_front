import React, { Component, Fragment } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MeterProducto from '../components/MeterProducto';

class Administrador extends Component{

    render(){
        return(
            <Fragment>
                <Header />
                <MeterProducto/>
                <Footer />
            </Fragment> 
        )
    }
}

export default Administrador;