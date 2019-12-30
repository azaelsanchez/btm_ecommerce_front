import React, { Component, Fragment } from 'react';

import AddToCart from './AddToCart';

axios.post('http://localhost:3000/products/product', body)
    .then( data =h> (data.id) )
    .catch( err => (err.mns))

    render(){
        return(
            <Fragment>
                

                <AddToCart/>
    
           
            </Fragment>
            
            
            
            
            
        )
    }
}

export default ProductItem;