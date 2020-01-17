import React, { Component } from "react";
import Slider from "react-slick";
import collar1 from '../assets/images/collar1.jpg'
import collar2 from '../assets/images/collar2.jpg'
import collar3 from '../assets/images/collar3.jpg'
import collar4 from '../assets/images/collar4.jpg'
import '../containers/App.css';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
            <div className="row d_flex">
                <div className="col-md-4 offset-md-2 productos-destacados">
        <h2>Productos destacados</h2>
        <Link to="/Products" className="ver-mas">Ver más</Link>
        <Slider {...settings}>
          <div>
          <a href="http://localhost:3000/buscador"><img src={collar1} width="500px" height="500px" className="app-collar" alt="Collar1" /></a>
          </div>
          <div>
          <a href="http://localhost:3000/buscador"><img src={collar2} width="500px" height="500px" className="app-collar" alt="Collar2" /></a>
          </div>
          <div>
          <a href="http://localhost:3000/buscador"><img src={collar3} width="500px" height="500px" className="app-collar" alt="Collar3" /></a>
          </div>
          <div>
          <a href="http://localhost:3000/buscador"><img src={collar4} width="500px" height="500px" className="app-collar" alt="Collar4" /></a>
          </div>
        </Slider>
      </div>
      </div>
      </div>
     
     
    );
  }
}


