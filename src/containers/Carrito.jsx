import React, { Component, Fragment } from 'react';

//Componentes importados
import Header from '../components/Header';

import Footer from '../components/Footer';

class Carrito extends Component{

    render(){
        return(
            <Fragment>
            <Header />
            

            
                
            <p>Hola soy un carrito</p>
            <Footer />
            </Fragment>
            
        )
    }
}

export default Carrito;