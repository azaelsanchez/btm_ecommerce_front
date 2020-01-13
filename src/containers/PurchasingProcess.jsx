import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
class PurchasingProcess extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usuario: JSON.parse(localStorage.getItem('usuario')),
            producto: [],
          
            
        }
    }

    carrito(num){
        localStorage.setItem(`num${num}`, num)
}

comprar(){
    console.log('Comprar')
    const body =[{
        'total':this.state.producto[0].precio,
        'cantidad' : 1,
        'user_id' : JSON.parse(localStorage.getItem('user')).id,
        'product_id' : this.state.producto[0].id
    }]
    Axios.post('http://localhost:3001/search/order/', body).then(item =>console.log( item)).catch(error => console.error('Algo fallo'))
    console.log(body)
}


    obtenerProductos = (num) => {
        console.log('numero', num)
    Axios.get(`http://localhost:3001/products/product/${num}`).then(product =>this.setState({producto:[product.data]})).catch(err => console.error(err))
    }


    componentDidMount() {
        console.log('hola')
        for(let i = 0; i <= localStorage.getItem('logintudProducto');i++){
            console.log(i)
        if(localStorage.getItem(`num${i}`)){
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
                <div className="productoCarrito">
                    <img src={product.img1} alt="Imagen"/>
                    <p className="nom">{product.name}</p>
                    <p className="nom">Cantidad: 1</p>
                    <p className="precio2"> {product.price} €</p>
                    {!localStorage.getItem('user') ? <button className="confirmar" disabled> Confirmar</button> : <button onClick={() => this.comprar()}>Confirmar</button> }
                </div>
                )} 
                {/* {this.state.usuario.nombre} */}
           
        </div>
        <Footer/>
    </Fragment>
    )
    }
}

export default PurchasingProcess;
