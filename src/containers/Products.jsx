import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterPrice from '../components/FilterPrice';
import ProductItem from '../components/ProductItem';

class Products extends Component{

    render(){
        return(
            <Fragment>
            <Header />
            
            <div>
                <nav>
                    <FilterPrice/>
                    <ProductItem/>
                
                </nav>
            </div>
        
            {/* <Footer /> */}
            </Fragment>
            
        )
    }
}

export default Products;