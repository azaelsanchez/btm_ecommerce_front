import React, { Component, Fragment } from 'react';

//Componentes importados
import AdminProfileData from '../components/AdminProfileData';
import AdminProfileOrders from '../components/AdminProfileOrders';
import Statistics from '../components/Statistics';

class AdminProfile extends Component{

    render(){
        return(
            <Fragment>
                <AdminProfileData/>
                <AdminProfileOrders/>
                <Statistics/> 
            </Fragment>
            
        )
    }
}


export default AdminProfile;