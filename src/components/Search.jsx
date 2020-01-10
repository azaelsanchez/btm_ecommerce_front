import React, { Component } from 'react';
import Axios from 'axios';
// import './style/Buscador.css'
class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            usuario: JSON.parse(localStorage.getItem('usuario')),
            login:'True',
            producto:[]
        }
    }
    productoTitulo = () => {
        console.log('Pepe')
   let product = localStorage.getItem('Prueba');
        Axios.get(`http://localhost:3001/search/product/${product}`).then(item => this.setState({product: item.data})).catch(err => console.error('LLegue hasta aqui'))
    }
     //Desconectar el usuario de la pagina 
    //  logout(login){
    //     console.log('la respuesta' , login)
    //     this.setState({login})
    //     Axios({ method: 'post', url: 'http://localhost:3001/usuarios/logout',
    //      body: this.state.usuario ,
    //      headers: { 'Authorization': this.state.usuario.token}})
    //      .then(item => console.log('Se ha completado'))
    //      .catch(err => console.error(err)
    //      )
    // }
    

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
             {this.state.product 
              ? <div>{this.state.product.map(item => 
                    <div className="producto">
                   <img src={item.img1} alt="Imagen" />
                   <p>Nombre: {item.name}</p>
                   <p>Precio: {item.price}</p>
                   <p>Descripcion: {item.shortDesc}</p>
                    </div>
                    )}</div>: <h1>No hay resultado</h1>  }   
         </div>
        )
    }
}
export default Search;