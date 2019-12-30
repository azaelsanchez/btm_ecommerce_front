import React, { Component, Fragment } from 'react';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfile from '../components/UserProfile';
import AdminProfile from '../components/AdminProfile';

class Profile extends Component{

    render(){
        return(
            <Fragment>
            <Header />
                <UserProfile/>
                <AdminProfile/>
            <Footer />
            </Fragment>
            
        )
    }
}


export default Profile;