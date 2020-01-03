import React, { Component, Fragment } from 'react';

import Register from './Register';
import Button from './Button';
import UserProfileData from './UserProfileData';

class AdminProfileData extends Component{
    render(){
        return(
            <Fragment>
                <h3>Listado Users</h3>
                <UserProfileData/>
                <h3>Añadir Usuario</h3>
                <Register/>
                <p>Borrar/Invalidar usuario</p>
                <Button/>
                
            </Fragment>
            
        )
    }
}

export default AdminProfileData;