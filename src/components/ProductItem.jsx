import React, { Component } from 'react';
import axios from 'axios';

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
            <li>{product.img1}</li>
            <li>{product.price}</li>
        </ul>
        
            )}
        </div> 
    )
  }
        
}

export default ProductItem;