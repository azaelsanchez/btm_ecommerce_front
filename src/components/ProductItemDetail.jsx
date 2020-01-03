import React, { Component } from 'react';
import axios from 'axios';

import AddToCart from './AddToCart'

class ProductItemDetail extends Component {
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
                <h4>{ product.name }</h4>
                <img src={product.img1 } alt="Imagen producto"/>
                <li>{ product.thumbImg1 }</li>
                <li>{ product.shortDesc }</li>
                <li>Precio: { product.price } €</li>
                <li>Stock: { product.stock }</li>
                <li>Talla: { product.size }</li>
                <li>{ product.longDesc }</li>
                <li>Dimensiones: { product.dimensions }</li>
            </ul>
        )
        }
            <AddToCart/>
        </div>
    )
  }
}

export default ProductItemDetail;