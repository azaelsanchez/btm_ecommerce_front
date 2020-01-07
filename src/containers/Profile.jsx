import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';

class Profile extends Component{

    render(){
        return(
            <Fragment>
            <Header />
            <Link to="../UserProfile"> Usuario </Link>
            <br/>
            <Link to="../AdminProfile"> Administrador </Link>
            <Footer />
            </Fragment>
            
        )
    }
}


export default Profile;