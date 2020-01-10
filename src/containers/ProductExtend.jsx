import React, { Component } from 'react';
import Header from '../components/Header';
import Axios from 'axios';
import ProductsRelated from '../components/ProductsRelated';
import Footer from '../components/Footer';
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
            <div className="producto">
        <h4>{ product.name }</h4>
                <img src={product.img1 } alt="Imagen producto1"/>
                <img src={product.img2 } alt="Imagen producto1"/>
                <img src={product.thumbImg3 } alt="Imagen producto1"/>
                <li>{ product.shortDesc }</li>
                <li>Precio: { product.price } €</li>
                <li>Stock: { product.stock }</li>
                <li>Talla: { product.size }</li>
                <li>{ product.longDesc }</li>
                <li>Dimensiones: { product.dimensions }</li>
                <button onClick={() =>  this.carrito(product.id)}>Añadir al carrito</button>
                <ProductsRelated/>
                <br/><br/>
                <Footer/>            
       
        </div>
        
            )}
            </div>            
        )
    }
}
export default Busqueda;