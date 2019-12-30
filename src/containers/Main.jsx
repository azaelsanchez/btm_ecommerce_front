import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


//Componentes importados
import Header from '../components/Header';
import ProductsPromoted from '../components/ProductsPromoted';
import Footer from '../components/Footer';
import ProductsMostSelled from '../components/ProductsMostSelled';
// import Sidebar from '../components/Sidebar';

function Main() {
  return (
    <Fragment>
      <Header />
        <ProductsPromoted />
        <br/><br/>
        <ProductsMostSelled/>

        {/* <Sidebar /> */}
        <div className="clearfix"></div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
    </Fragment>
  );
}

export default Main;
