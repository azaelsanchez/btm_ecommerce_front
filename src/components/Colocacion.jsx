import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Colocacion extends Component{
    render(){
        return(
            <div id="" className="hosting">
      <div className="container">
         <div className="row">
            <div className="col-md-5 offset-md-1">
               <div className="titlepage2">
                  <h4 className="descripcion">¿Qué es y en qué se diferencia un collar Martingale de uno normal?</h4>
                  <div className="long-text">
                     <p>
                        Los collares Martingale de candyPet®, son collares formados por dos cintas de nylon, en nuestro
                        caso forradas por ambos lados con tela de algodón (para minimizar los roces con el cuello), y
                        unidas por hebillas de metal soldadas. Además para dotarlos de mayor resistencia presentan
                        costuras reforzadas.
                     </p>
                     <p>
                        Utiliza un sistema de semi-ahorque, con la ventaja que no daña al perro debido al ancho del
                        collar.
                     </p>
                     <p>
                        Conocidos también como "Collares Antiescape", debido a que es casi imposible escapar de
                        un Martingale correctamente ajustado.
                     </p>
                     <p>
                        Es ideal para las razas de perros que tiene la cabeza tan estrecha con el cuello, como los
                        galgos o podencos. Pero pueden utilizarse perfectamente en cualquier raza de perros.
                     </p>
                     <a className="go-to-catalog" href="#link">Ir al catálogo ></a>
                  </div>
               </div>
            </div>
            <div className="col-md-5 offset-md-1">
               <img src="images/perro-blanco-naranja.png" alt="colocación de la correa correctamente"/>
            </div>
         </div>
      </div>
   </div>
            
        )
    }
}

export default Colocacion;




