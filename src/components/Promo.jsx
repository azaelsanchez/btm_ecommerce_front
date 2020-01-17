import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Promo extends Component{

    render(){
        return(
            <div>
            <section className="banner_main">
            <div className="container">
                <div className="row d_flex">
                    <div className="col-md-6">
                        <div className="text-img">
                            <figure><img src="images/hulito-bg-amarillo2.png" /></figure>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-bg">
                            <h2>Encuentra el <strong>Collar Martingale</strong> para tu perro, ya sea Galgo o de cualquier
                                otra
                                raza.</h2>
                                <Link to="/Products">Ver todo el catálogo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        )
    }
}

export default Promo;