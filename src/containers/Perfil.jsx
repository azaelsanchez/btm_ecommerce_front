import React, { Component, Fragment } from 'react';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';

class Perfil extends Component{

    render(){
        return(
            <Fragment>
            <Header />
              
            <p>Hola soy Perfil</p>
            <Footer />
            </Fragment>
            
        )
    }
}


export default Perfil;