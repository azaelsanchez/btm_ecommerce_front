import React, { Component, Fragment } from 'react';

//Componentes importados
import UserProfileData from '../components/UserProfileData';
//import UserProfileOrders from '../components/UserProfileOrders';

class UserProfile extends Component{

    render(){
        return(
            <Fragment>
            <div>
                <h1>Perfil Usuario</h1>
                <h3>Datos Usuario</h3>
                <UserProfileData/>
                <h3>Datos pedidos</h3>
                {/*<UserProfileOrders/>*/} 
            </div>
            </Fragment>
            
        )
    }
}


export default UserProfile;