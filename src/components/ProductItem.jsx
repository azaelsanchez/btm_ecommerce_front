import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
      <Fragment>
        <div className="titlepage">
                    <h2>Catálogo de productos</h2>
        </div>
        <div>
      { this.state.Products.map(product => 
        <div id="service" className="Services col-xl-4 col-lg-4 col-md-4 col-sm-12">
        {/* <div> */}
        {/* <div className="container"> */}
           {/* <div className="row"> */}
              {/* <div className="col-md-12"> */}
                 
                 {/* </div> */}
              {/* </div> */}
           {/* </div> */}
          {/* //  <div className="row"> */}
              <div className="">
                 <div className="Services-box">
                    <i><Link to={'/extender'}><img onClick={() => this.detalles(product.name)} src={product.img1}alt="Imagen producto"/></Link></i>
                    <h3>{product.name}</h3>
                    <p>{product.price} €</p>
                    <Link to={'/extender'}> <a className="buy" onClick={() => this.detalles(product.name)}>Más información</a></Link>
                 </div>
              </div>
                {/* //  </div> */}
                {/* //  </div> */}
        </div>
                 
        
            )}
        </div> 
        </Fragment>
    )
  }
        
}

export default ProductItem;