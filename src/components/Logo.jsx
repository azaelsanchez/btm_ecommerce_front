import React, { Component } from 'react';

import logo from '../assets/images/logo_black-brown.png'

class Logo extends Component{

    render(){
        return(
            <div id="logo">
                        <a href='/'>
                            <img src={logo}className="app-logo" alt="Logotipo"/>
                        <span id="brand">
                           
                    </span>
                        </a>
                    </div>
            
            
            
            
        )
    }
}

export default Logo;