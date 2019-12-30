import React, { Component, Fragment } from 'react';

//Componentes importados
import UserProfileData from '../components/UserProfileData';
import UserProfileOrders from '../components/UserProfileOrders';

class UserProfile extends Component{

    render(){
        return(
            <Fragment>
            <div>
                <p>Perfil Usuario</p>
                <p>Datos Usuario</p>
                <UserProfileData/>
                <p>Datos pedidos</p>
                <UserProfileOrders/> 
            </div>
            </Fragment>
            
        )
    }
}


export default UserProfile;