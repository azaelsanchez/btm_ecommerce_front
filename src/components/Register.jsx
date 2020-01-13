import React, { Component } from 'react';
import Axios from 'axios';


class Register extends Component {

    constructor(props){
        super(props);

        //this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
          name: '',
          surname1: '',
          surname2: '',
          password: '',
          email: '',
          shipAddress1: '',
          shipAddress2: '',
          postalCode: '',
          city: '',
          //RegionId: '',
          phone: '',
        }
    }

    handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name]: value
      });

    }

    handleSubmit = (event) => {
      event.preventDefault();

      const body = {
        name: this.state.name,
        surname1: this.state.surname1,
        surname2: this.state.surname2,
        password: this.state.password,
        email: this.state.email,
        shipAddress1: this.state.shipAddress1,
        shipAddress2: this.state.shipAddress2,
        postalCode: this.state.postalCode,
        city: this.state.city,
        //RegionId: this.state.RegionId,
        phone: this.state.phone,
      }

      //axios.post('http://localhost:3000/user/register', body)
      //    .then( data =h> (data.id) )
      //    .catch( err => (err.mns))

      Axios.post('http://localhost:3001/user/register', body)
                .then(item => console.log('usuario registrado'))
                .then(item => this.setState({ redirect: true }))
                .catch(err => console.error(err.error))
  }


    render(){
        return(
          <div>
              <form onSubmit={(ev) => this.handleSubmit(ev)}>
                <label> Nombre </label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={(ev) => this.handleChange(ev)}
                />
                
                <label> Primer Apellido </label>
                  <input
                    type="text"
                    name="surname1"
                    value={this.state.surname1}
                    onChange={(ev) => this.handleChange(ev)}
                  />
                

                <label> Segundo Apellido </label>
                  <input
                    type="text"
                    name="surname2"
                    value={this.state.surname2}
                    onChange={(ev) => this.handleChange(ev)}
                  />
                
                <label> Contraseña </label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={(ev) => this.handleChange(ev)}
                  />
              
                <label> Email </label>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={(ev) => this.handleChange(ev)}   
                    />
                
                <label> Dirección 1 </label>
                  <input
                    type="text"
                    name="shipAddress1"
                    value={this.state.shipAddress1}
                    onChange={(ev) => this.handleChange(ev)}
                  />
                
                <label> Dirección 2 </label>
                  <input
                    type="text"
                    name="shipAddress2"
                    value={this.state.shipAddress2}
                    onChange={(ev) => this.handleChange(ev)}
                  />

                <label> PostalCode </label>
                  <input
                    type="number"
                    name="postalCode"
                    value={this.state.postalCode}
                    onChange={(ev) => this.handleChange(ev)}
                  />
                

                <label> City </label>
                  <input
                    type="text"
                    name="city"
                    value={this.state.city}
                    onChange={(ev) => this.handleChange(ev)}
                  />


                {/* <label> RegionId </label>
                  <input
                    type="text"
                    name="RegionId"
                    value={this.state.RegionId}
                    onChange={(ev) => this.handleChange(ev)}
                  /> */}
                

                <label> Phone </label>
                  <input
                    type="number"
                    name="phone"
                    value={this.state.phone}
                    onChange={(ev) => this.handleChange(ev)}
                  />
                
                  
                    <input type="submit" value="Create Account" />
                </form>
                </div>
        )
    }
}
export default Register;