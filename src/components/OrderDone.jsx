import React, { Component, Fragment } from 'react';

import OrderDetailDone from './OrderDetailDone';
import Direction from './Direction';

class OrderDone extends Component{

    render(){
        return(
            <Fragment>
                <h3>Productos Comprados</h3>
                <OrderDetailDone/>
                <h3>Dirección Pedido</h3>
                <Direction/>
            </Fragment>     
        )
    }
}

export default OrderDone;