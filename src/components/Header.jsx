import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Buscador from './Buscador';


class Header extends Component {

    render(){

        return(
            <header id="header">
                <div className="center">

                    <div id="logo">
                    <a href="index.html">
                        {/* <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand"> */}
                            {/* <strong>Curso</strong>React
                    </span> */}
                    </a>
                    </div>
                    <nav id="menu">
                        <ul>
                            <li>
                                <Link to="/"> Inicio </Link>
                            </li>
                            <li>
                            <Link to="/productos"> Productos </Link>
                            </li>
                            {/* <li>
                                <a href="#">Info</a>
                            </li> */}
                            <li>
                            <Link to="/login"> Mi perfil </Link>
                            </li>
                            <li>
                            <Link to="/carrito"> Cesta </Link>
                            </li>
                        </ul>
                        <Buscador />
                    </nav>

                    <div className="clearfix"></div>
                </div>
            </header>
        )
    }

}

export default Header;