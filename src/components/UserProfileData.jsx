import React, { Component, Fragment } from 'react';

import Button from './Button';
class UserProfileData extends Component{

    render(){
        return(
            <Fragment>
                <p>name</p>
                <p>surname1</p>
                <p>surname2</p>
                <p>shippinaddress1</p>
                <p>shippinaddress2</p>
                <p>password</p>
                <p>postalcode</p>
                <p>city</p>
                <p>region</p>
                <p>phone</p>
                <p>email</p>
                <Button/>
            </Fragment>
            
            
            
            
        )
    }
}

export default UserProfileData;