import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

import Logo from './Logo';
import Search from './Search';
class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                    <Logo/>
                    <nav id="menu">
                        <ul>
                            <li>
                                <Search/>
                            </li>
    
                            <li>
                                <Link to="/"> Home </Link>
                            </li>

                            <li>
                                <Link to="/Products"> Productos </Link>
                            </li>

                            {/* <li>
                                <a href="#">Info</a>
                            </li> */}

                            <li>
                                <Link to="/Login"> Mi perfil </Link>
                            </li>
                            
                            <li>
                                <Link to="/PurchasingProcess"> Cesta </Link>
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