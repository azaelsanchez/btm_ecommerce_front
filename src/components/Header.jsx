import React, { Component } from 'react';


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
                                <a href="#">Inicio</a>
                            </li>
                            <li>
                                <a href="#">Productos</a>
                            </li>
                            <li>
                                <a href="#">Info</a>
                            </li>
                            <li>
                                <a href="#">Mi Perfil</a>
                            </li>
                            <li>
                                <a href="#">Cesta</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="clearfix"></div>
                </div>
            </header>
        )
    }

}

export default Header;