import React, { Component } from 'react';
import Header from '../components/Header';
import Axios from 'axios';
import Search from '../components/Search';
class Busqueda extends Component {
    constructor(){
        super()
        this.state={
            usuario: JSON.parse(localStorage.getItem('usuario')),
            login:'True',
            producto:[]
        }
    }
    productoTitulo = () => {
        console.log('Pepe')
   let product = localStorage.getItem('Prueba');
        Axios.get(`http://localhost:3001/productos/productos/${product}`).then(item => this.setState({product: item.data})).catch(err => console.error('LLegue hasta aqui'))
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
                <Search/>  
            </div>            
        )
    }
}
export default Busqueda;