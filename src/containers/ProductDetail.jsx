import React, { Component, Fragment } from 'react';

//Componentes importados
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductItemDetail from '../components/ProductItemDetail';
import ProductsRelated from '../components/ProductsRelated';


class DetailProduct extends Component{

    render(){
        return(
            <Fragment>
                <Header />
                <ProductItemDetail/>
                <ProductsRelated/>
                <Footer />
            </Fragment>
            
        )
    }
}

export default DetailProduct;