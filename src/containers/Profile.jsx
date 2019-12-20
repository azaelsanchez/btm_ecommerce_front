import React, { Component, Fragment } from 'react';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfileData from '../components/UserProfileData';
import UserProfileOrders from '../components/UserProfileOrders';

class Perfil extends Component{

    render(){
        return(
            <Fragment>
            <Header />
            <div>
                <p>Perfil Usuario</p>
                <p>Datos Usuario</p>
                <UserProfileData/>
                <p>Datos pedidos</p>
                <UserProfileOrders/> 
            </div>
            
            <div>
                <p>Perfil Administrador</p>
                <p>Datos Administrador</p>
                
            </div>
            

            <Footer />
            </Fragment>
            
        )
    }
}


export default Perfil;