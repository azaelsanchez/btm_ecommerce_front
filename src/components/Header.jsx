import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


//import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

import Logo from './Logo';
class Header extends Component {

    constructor(){
        super()
        this.state={
            input:''
        }
    }
    input(ev) {
        console.log(ev.target.value)
        localStorage.setItem('Prueba', ev.target.value)
        console.log('Hola')
    }


    
    render() {

        return (
                 // <!-- header inner -->
            <header id="header">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                             <Logo/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample04">
                                    <ul>
                                        <li className="nav-item">
                                            <div className="search-box">
                                            <input className="search" placeholder="Busca productos" type="text" onChange={(ev) => this.input(ev)} />
                                            <Link to={'/buscador'}><a className="nav-link search" href="#search"><img src="images/search-icon.svg" alt="#"></img></a></Link>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/Login"> <a class="nav-link profile"><img src="images/profile-icon.svg" alt="#"></img></a></Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/PurchasingProcess"><a className="nav-link" ><img src="images/cart-icon.svg" alt="carrito" /></a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            </header>
            
        )
    }

}


export default Header;