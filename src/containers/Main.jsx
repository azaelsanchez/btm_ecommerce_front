import React, { Fragment } from 'react';
import './App.css';

//Componentes importados
import Header from '../components/Header';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

function Main() {
  return (
    <Fragment>
      <Header />
      <Slider />

      <Sidebar />
      <div className="clearfix"></div>
      <Footer />
    </Fragment>
  );
}

export default Main;
