import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DetallesCollares from '../components/DetallesCollares';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class PurchasingProcess extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usuario: JSON.parse(localStorage.getItem('usuario')),
            producto: [],


        }
    }

    carrito(num) {
        localStorage.setItem(`num${num}`, num)
    }

    borrar(num) {
        localStorage.removeItem(`num${num}`);
    }


    comprar() {
        alert("Producto comprado con exito");
        console.log(this.state.producto)
        const body = [{
            'total': this.state.producto[0].price,
            'cantidad': 1,
            'user_id': JSON.parse(localStorage.getItem('user')).id,
            'product_id': this.state.producto[0].id
        }]
        Axios.post('http://localhost:3001/search/order', body).then(item => console.log(item)).catch(error => console.error('Algo fallo'))
        console.log(body)
    }


    obtenerProductos = (num) => {
        console.log('numero', num)
        Axios.get(`http://localhost:3001/products/product/${num}`).then(product => this.setState({ producto: [product.data] })).catch(err => console.error(err))
    }


    componentDidMount() {
        console.log('hola')
        for (let i = 0; i <= localStorage.getItem('logintudProducto'); i++) {
            console.log(i)
            if (localStorage.getItem(`num${i}`)) {
                this.obtenerProductos(localStorage.getItem(`num${i}`))
                console.log('Entro', localStorage.getItem(`num${i}`))
            }
        }

    }




    render() {
        console.log('soy el render')

        return (
            <Fragment>
                <Header />
                <div>
                    {this.state.producto.map(product =>

<div id="service" className="Services detalle">
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
                        <img src={product.img1} alt="Imagen"/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="product-description">
                        <p className="name">{product.name}</p>
                        <p className="price">{product.price} € <span className="stock">(30 en stock)</span></p>
                        <p className="nom">Cantidad: 1</p>
                           <hr/>
                           <p className="size">Talla: <span>M</span></p>
                           <p className="dimensions">Dimensiones: 19 x 5 x 2 cm</p>
                           <div className="container-buttons">
                           {!localStorage.getItem('user') ? <button className="buy" disabled> Confirmar</button> : <button className="buy" onClick={() => this.comprar()}>Confirmar</button> }
                           {!localStorage.getItem('user') ? <button className="remove-from-cart" disabled> Borrar</button> : <button className="remove-from-cart" onClick={() => this.borrar(product.id)}>Borrar</button> }
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   )} 
                </div>
                <DetallesCollares/>
                {/* <Footer/> */}
                </Fragment>
                )
                }
                    
            }
            
            export default PurchasingProcess;
