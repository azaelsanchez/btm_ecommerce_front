import React, { Component, Fragment } from 'react';

import Button from './Button';

class OrderDetailToMake extends Component{

    render(){
        return(
            <Fragment>
                <h3>name</h3>
                <p>cantidad</p>
                <p>price</p>
                <p>transporte</p>
                <p>tax</p>
                <p>shipping-cost</p>
                <p>total</p>
    
                <p>Borrar</p>
                <Button name="Borrar"/>
                
    
            </Fragment>
            
            
            
            
            
        )
    }
}

export default OrderDetailToMake;