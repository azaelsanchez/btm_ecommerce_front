import React, { Component } from 'react';
import Header from '../components/Header';
import Axios from 'axios';
import ProductsRelated from '../components/ProductsRelated';
// import Footer from '../components/Footer';
class Busqueda extends Component {
    constructor(){
        super()
        this.state={
            usuario: JSON.parse(localStorage.getItem('usuario')),
            login:'True',
            product:[]
        }
        
    }
    productoTitulo = () => {
        console.log('Pepe')
   let product = localStorage.getItem('nombre');
        Axios.get(`http://localhost:3001/search/product/${product}`).then(item => this.setState({product: item.data})).catch(err => console.error('LLegue hasta aqui'))
    }
     //Desconectar el usuario de la pagina 
     logout(login){
        console.log('la respuesta' , login)
        this.setState({login})
        Axios({ method: 'post', url: 'http://localhost:3001/usuarios/logout',
         body: this.state.usuario ,
         headers: { 'Authorization': this.state.usuario.token}})
         .then(item => console.log('Se ha completado'))
         .catch(err => console.error(err)
         )
    }


    carrito(num){
        console.log('Hola')
        localStorage.setItem(`num${num}`, num)

}

    componentDidMount(){
        console.log('busqueda')
        this.productoTitulo()
    }

    
    render() {
        console.log()
        return (
            <div>
                <Header logout={this.logout.bind(this)} />
                { this.state.product.map(product => 
          <div id="service" className="Services detalle-producto-final">
          <div className="container">
             <div className="row">
                <div className="col-md-12">
                   <div className="titlepage">
                      <h2>Detalle de producto</h2>
                   </div>
                </div>
             </div>
             <div className="row">
                <div className="col-md-12">
                   <div className="container-detail">
                      <div className="row">
                         <div className="col-md-6">
                            <div className="Services-box">
                               <img src={product.img1 } alt="#" />
                            </div>
                         </div>
                         <div className="col-md-6">
                            <div className="product-description">
                               <p className="name">{ product.name }</p>
                               <p className="price">23.95€ <span className="stock">(30 en stock)</span></p>
                               <hr/>
                               <p className="size">Talla: <span>M</span></p>
                               <p className="dimensions">Dimensiones: 19 x 5 x 2 cm</p>
                               <div className="container-buttons">
                               <button className='buy' onClick={() =>  this.carrito(product.id)}>Añadir al carrito</button>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className="row">
 }   <div className="col-md-6">
                            <div className="Services-box neat-services">
                               <img src={product.img2 } alt="#" />
                            </div>
                         </div>
                         <div className="col-md-6">
                            <p className="lorem">
                            { product.shortDesc }
                            </p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className='mover'>
                <ProductsRelated/>
                </div>
                
       
        </div>
        
            )}
        </div>      
        )
    }
}
export default Busqueda;