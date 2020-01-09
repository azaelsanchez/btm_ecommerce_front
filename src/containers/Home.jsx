import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


//Componentes importados
import Header from '../components/Header';
import Promo from '../components/Promo';
import ProductsPromoted from '../components/ProductsPromoted';
import ProductsMostSelled from '../components/ProductsMostSelled';
import Footer from '../components/Footer';
//import Sidebar from '../components/Sidebar';

class Home extends Component{
  
  render(){
      return(
        <Fragment>
          <Header />
          <Promo/>
          <ProductsPromoted/>
          

          {/*<Sidebar />
          <div className="clearfix"></div>*/}
          <Footer />
        </Fragment>
  )
}
}

export default Home;
