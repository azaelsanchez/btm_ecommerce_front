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

  detalles = (nombre) => {
    console.log('Pepe')
let product = localStorage.setItem('nombre', nombre);
    // axios.get(`http://localhost:3001/search/product/${product}`).then(item => this.setState({product: item.data})).catch(err => console.error('LLegue hasta aqui'))
}
  render() {
   if(this.state.Products){
     console.log('adios');
     
     localStorage.setItem('logintudProducto', this.state.Products.length)
   } else{
    console.log('hola');
     
    console.log(this.state.Products)
   }
    return (
        <div>
        { this.state.Products.map(product => 
        <div>
        <ul>
            <li><h2>{product.name}</h2></li>
            <li>Precio: {product.price} €</li>
            <img src={product.img1}alt="Imagen producto"/>
            <br/>
            <Link to={'/extender'}> <button onClick={() => this.detalles(product.name)}>Más información</button></Link>
        </ul>
        </div>
        
            )}
            <AddToCart/>
        </div> 
    )
  }
        
}

export default ProductItem;