import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddToCart from './AddToCart'

class ProductItem extends Component {
  state = {
    Products: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/products/product`)
      .then(res => {
        const Products = res.data;
        this.setState({ Products });
      })
  }

  azael(nombre){
    localStorage.setItem('nombre', nombre)
    
  }
  render() {
    return (
        <div>
        { this.state.Products.map(product => 
        <div>
        <ul>
            <li><h2>{product.name}</h2></li>
            <li>Precio: {product.price} €</li>
            <img src={product.img1}alt="Imagen producto"/>
            <Link to={'/ProductDetail'}> <button onClick={() => this.azael(product.name)}>Más</button></Link>
        </ul>
        </div>
        
            )}
            <AddToCart/>
        </div> 
    )
  }
        
}

export default ProductItem;