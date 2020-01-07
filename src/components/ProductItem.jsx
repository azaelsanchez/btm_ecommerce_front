import React, { Component } from 'react';
import axios from 'axios';

import AddToCart from './AddToCart'

class ProductItem extends Component {
  state = {
    Products: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/products/product`)
      .then(res => {
        const Products = res.data;
        this.setState({ Products });
      })
  }

  render() {
    return (
        <div>
        { this.state.Products.map(product => 
        <ul>
            <li>{product.name}</li>
            <img src={product.img1}alt="Imagen producto"/>
            <li>{product.price} €</li>
        </ul>
        
            )}
            <AddToCart/>
        </div> 
    )
  }
        
}

export default ProductItem;