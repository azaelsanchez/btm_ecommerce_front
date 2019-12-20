import React, { Component, Fragment } from 'react';

import OrderDetailToMake from '../components/OrderDetailToMake'
import DirectionsForm from '../components/DirectionsForm'
import AddToCart from '../components/AddToCart'

class Cart extends Component {

    render(){

        return(
            <Fragment>
                <OrderDetailToMake  />
                <DirectionsForm/>
                <AddToCart/>
            </Fragment>
        )
    }
}

export default Cart;