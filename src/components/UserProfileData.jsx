import React, { Component } from 'react';
import axios from 'axios';

import Button from './Button';

class UserProfileData extends Component {
  state = {
    Products: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/user/users`)
      .then(res => {
        const Users = res.data;
        this.setState({ Users });
      })
  }

  render() {
    return (
        <div>
        { this.state.Users.map(user => 
        <ul>
            <li>{user.name}</li>
            <li>{user.surname1}</li>
            <li>{user.surname2}</li>
            <li>{user.shipAddress1}</li>
            <li>{user.shipAddress2}</li>
            <li>{user.city}</li>
            <li>{user.postalCode}</li>
            <li>{user.regionId}</li>
            <li>{user.phone}</li>
            <li>{user.email}</li>
            <li>{user.password}</li>
            <li>{user.id}</li>
            <li>{user.token}</li>
            <li>{user.createdAt}</li>
            <li>{user.updatedAt}</li>
        </ul>
        
            )}
            <Button/>
        </div> 
    )
  }
        
}

export default UserProfileData;

