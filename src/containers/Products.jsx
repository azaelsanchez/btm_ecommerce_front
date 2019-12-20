import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterPrice from '../components/FilterPrice';
import ProductItem from '../components/ProductItem';
import AddToCart from '../components/AddToCart';

class Products extends Component{

    render(){
        return(
            <Fragment>
            <Header />
            
            <div>
                <nav>
                    <FilterPrice/>
                    <ProductItem/>
                    <AddToCart/>
                    
                    
                    <Link to={'/detailProduct'}> DetalleProducto</Link>
                </nav>
            </div>
            
                
            
            
            <Footer />
            </Fragment>
            
        )
    }
}

export default Products;