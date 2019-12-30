import React, { Component, Fragment } from 'react';

import Button from './Button';

class OrderDetailToMake extends Component{

    render(){
        return(
            <Fragment>
                <h1>name</h1>
                <p>cantidad</p>
                <p>price</p>
                <p>transporte</p>
                <p>tax</p>
                <p>shipping-cost</p>
                <p>total</p>
    
                <p>Borrar</p>
                <Button/>
                
    
            </Fragment>
            
            
            
            
            
        )
    }
}

export default OrderDetailToMake;