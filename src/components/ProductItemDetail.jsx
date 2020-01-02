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
                <li>{ product.name }</li>
                <li>{ product.img1 }</li>
                <li>{ product.thumbImg1 }</li>
                <li>{ product.name }</li>
                <li>{ product.shortDesc }</li>
                <li>{ product.price }</li>
                <li>{ product.stock }</li>
                <li>{ product.size }</li>
                <li>{ product.longDesc }</li>
                <li>{ product.dimension }</li>
            </ul>
        )
        }
            <AddToCart/>
        </div>
    )
  }
}

export default ProductItemDetail;