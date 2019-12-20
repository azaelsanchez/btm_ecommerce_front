import React, { Component, Fragment } from 'react';

import AddToCart from '../components/AddToCart';

class ProductItem extends Component{

    render(){
        return(
            <Fragment>
                <h1>Name</h1>
                <p>Img</p>
                <p>Price</p>

                <AddToCart/>
    
           
            </Fragment>
            
            
            
            
            
        )
    }
}

export default ProductItem;