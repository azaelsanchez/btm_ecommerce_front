import React, { Component } from 'react';

import Button from './Button';
class DirectionsForm extends Component {

    render(){

        return(
            <div>
                <label> Nombre </label>
                <input
                    type="text"
                    name="name"
                    value={(this.state.name)}
                    onChange={(ev) => this.handleChange(ev)}
                />

                <label> Primer Apellido </label>
                <input
                    type="text"
                    name="surname1"
                    value={(this.state.surname1)}
                    onChange={(ev) => this.handleChange(ev)}
                />

                <label> Segundo Apellido </label>
                <input
                    type="text"
                    name="surname2"
                    value={(this.state.surname2)}
                    onChange={(ev) => this.handleChange(ev)}
                />

                <label> Dirección 1 </label>
                <input
                    type="text"
                    name="shipAddress1"
                    value={(this.state.shipAddress1)}
                    onChange={(ev) => this.handleChange(ev)}
                />

                <label> Dirección 2 </label>
                <input
                    type="text"
                    name="shipAddress2"
                    value={(this.state.shipAddress2)}
                    onChange={(ev) => this.handleChange(ev)}
                />
                
                <label> Codigo Postal </label>
                <input
                    type="text"
                    name="postalcode"
                    value={(this.state.postalcode)}
                    onChange={(ev) => this.handleChange(ev)}
                />
                
                <label> Comunidad Autonoma </label>
                <input
                    type="text"
                    name="region"
                    value={(this.state.region)}
                    onChange={(ev) => this.handleChange(ev)}
                />

                <Button name="Reset"/>
            
            </div>        
        )
    }
}

export default DirectionsForm;