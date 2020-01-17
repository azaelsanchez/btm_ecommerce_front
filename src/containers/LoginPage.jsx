import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';
import Register from '../components/Register'; 
import Login from '../components/Login'; 




class LoginPage extends Component{

   
    render(){
        return(
            <Fragment>
                <Header />
                Registro  
                <Register/>
                Login
                <Login/>
                
                <Link to={'/Profile'}> Profile Admin/User</Link>
                {/* <Footer /> */}
            </Fragment>
            
        )
    }
}


export default LoginPage;