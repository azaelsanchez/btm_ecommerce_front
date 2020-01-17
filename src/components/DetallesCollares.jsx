import React, { Component} from 'react';
import colocacioncollar from '../assets/images/galgo-mirando-left.png';

class DetallesCollares extends Component{
    render(){
        return(
            <div id="" className="detalle-producto">
            <div className="container">
               <div className="row">
                  <div className="col-md-5 offset-md-1">
                     <div className="titlepage">
                        <div className="long-text">
                           <p>
                              Los collares Martingale de CandyPet®, son collares formados por dos cintas de nylon, en nuestro
                              caso forradas por ambos lados con tela de algodón (para minimizar los roces con el cuello), y
                              unidas por hebillas de metal soldadas. Además para dotarlos de mayor resistencia presentan
                              costuras reforzadas. Hecho a mano en España. Costuras reforzadas y hebillas soldadas para la
                              seguridad de tu mascota. Tela de algodón 100% de máxima calidad con diseños exclusivos. Es ideal
                              para las razas de perros como los galgos o podencos. Válidos para cualquier raza de perros.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-5 offset-md-1">
                     <img src={colocacioncollar} alt="colocación de la correa correctamente"/>
                  </div>
               </div>
            </div>
         </div>
            
        )
    }
}

export default DetallesCollares;
