import React, { Component, Fragment } from 'react';

import Button from './Button';
class DirectionsForm extends Component {

    render(){

        return(
            <Fragment>
                <p>Name</p>
                <p>Surname1</p>
                <p>Surname2</p>
                <p></p>
                <p>Reset</p>
                <Button/>
            </Fragment>

        )
    }
}

export default DirectionsForm;