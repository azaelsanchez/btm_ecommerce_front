import React, { Component, Fragment } from 'react';

import Register from './Register';
import Button from './Button';

class AdminProfileData extends Component{
    render(){
        return(
            <Fragment>
                <p>Listado User</p>
                <Register/>
                <p>Añadir Usuario</p>
                <Button/>
            </Fragment>
            
        )
    }
}

export default AdminProfileData;