import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';

class Productos extends Component{

    render(){
        return(
            <Fragment>
            <Header />
            
            <div>
                <nav>
                    <p>Hola soy un producto</p>
                    <Link to={'/detalle'}> DetalleProducto</Link>
                </nav>
            </div>
            
                
            
            
            <Footer />
            </Fragment>
            
        )
    }
}

export default Productos;