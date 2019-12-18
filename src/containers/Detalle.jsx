import React, { Component, Fragment } from 'react';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';


class Detalle extends Component{

    render(){
        return(
            <Fragment>
            <Header />
        
            <p>Hola soy un Detalle</p>
            <Footer />
            </Fragment>
            
        )
    }
}

export default Detalle;