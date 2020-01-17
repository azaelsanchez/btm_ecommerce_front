import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


//Componentes importados
import Header from '../components/Header';
import Promo from '../components/Promo';
import ProductsPromoted from '../components/ProductsPromoted';
import ProductsMostSelled from '../components/ProductsMostSelled';
import Footer from '../components/Footer';
import Colocacion from '../components/Colocacion';
import DetallesCollares from '../components/DetallesCollares'
//import Sidebar from '../components/Sidebar';

class Home extends Component{
  
  render(){
      return(
        <Fragment>
          <Header />
          <Promo/>
          <div className='mover'>
          <ProductsPromoted/>
          </div>
          {/* <DetallesCollares/> */}
          <Colocacion/>
          <div className='mover'>
          <ProductsMostSelled/>
          </div>
          
          

          {/*<Sidebar />
          <div className="clearfix"></div>*/}
          {/* <Footer /> */}
        </Fragment>
  )
}
}

export default Home;
