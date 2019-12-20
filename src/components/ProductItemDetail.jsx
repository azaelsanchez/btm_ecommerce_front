import React, { Component, Fragment } from 'react';

import AddToCart from '../components/AddToCart'
class ProductItemDetail extends Component{

    render(){
        return(
            <Fragment>
                <p>Img</p>
                <p>Resto Img</p>
                <h1>Name</h1>
                <p>shortDesc</p>
                <p>Price</p>
                <p>Stock</p>
                <p>Size</p>
                <p>LongDesc</p>
                <p>Dimension</p>

                <AddToCart/>
    
            </Fragment>
            
            
            
            
            
        )
    }
}

export default ProductItemDetail;