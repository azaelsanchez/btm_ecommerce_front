import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class Login extends Component {

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: '',
            password: ''

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
        email: this.state.email,
        password: this.state.password,
      }
console.log("Hola")
        axios.post('http://localhost:3001/user/login', body)
        .then(item => {localStorage.setItem('user', JSON.stringify(item.data.user))})
        .then(item => {this.setState({user:JSON.parse(localStorage.getItem('user'))})})
        .then(item => this.setState({redirect: true}))
        .catch(error => console.error(error))
    
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  handleReset = (event) => {
    event.preventDefault();
    this.state = {
        email: '',
        password: ''          
    }
    }

    render(){
        return(
          <div>
                <form onSubmit={(ev) => this.handleSubmit(ev)}>
                    <label> Email </label>
                        <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={(ev) => this.handleChange(ev)}   
                        />
                
                    <label> Password </label>
                        <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={(ev) => this.handleChange(ev)}
                        />
                    <button className="remove-from-cart" onClick={(ev) => this.handleReset(ev)}> Reset </button>
                    <button className="buy" onSubmit={() => this.LoginUsuario()}>Login</button>
                </form>
                {this.renderRedirect()}
        </div>
         
        )
    }
}


export default Login;