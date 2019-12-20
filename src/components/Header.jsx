import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

import Logo from './Logo';
import Search from './Search';
class Header extends Component {

    render(){

        return(
            <header id="header">
                <div className="center">

                    <Logo/>
                    </div>
                    <nav id="menu">
                        <ul>
                            <Search/>
                            <li>
                                <Link to="/Home"> Home </Link>
                            </li>
                            <li>
                                <Link to="/Product"> Productos </Link>
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
                
            </header>
        )
    }

}


export default Header;