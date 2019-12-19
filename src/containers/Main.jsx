import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


//Componentes importados
import Header from '../components/Header';
import SliderPDestacados from '../components/SliderPDestacados';
import Footer from '../components/Footer';
import SliderPMasVendidos from '../components/SliderPMasVendidos';
// import Sidebar from '../components/Sidebar';

function Main() {
  return (
    <Fragment>
      <Header />
      <SliderPDestacados />
      <br/><br/>
      <SliderPMasVendidos/>

      {/* <Sidebar /> */}
      <div className="clearfix"></div>
      <Footer />
    </Fragment>
  );
}

export default Main;
