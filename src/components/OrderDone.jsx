import React, { Component, Fragment } from 'react';

import OrderDetailDone from './OrderDetailDone';
import Direction from './Direction';

class OrderDone extends Component{

    render(){
        return(
            <Fragment>
               <OrderDetailDone/>
               <Direction/>
            </Fragment>     
        )
    }
}

export default OrderDone;