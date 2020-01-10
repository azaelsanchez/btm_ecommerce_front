import React, { Component } from "react";
import Slider from "react-slick";
import collar5 from '../assets/images/collar5.jpg'
import collar2 from '../assets/images/collar2.jpg'
import collar6 from '../assets/images/collar6.jpg'
import collar3 from '../assets/images/collar3.jpg'
import collar7 from '../assets/images/collar7.jpg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
    
      infinite: true,
      centerPadding: "60px",
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <h2> Productos más vendidos </h2>
        <Slider {...settings}>
        <div>
          <img src={collar6} width="500px" height="500px" className="app-collar" alt="Collar6" />
          </div>
          <div>
          <img src={collar5} width="500px" height="500px" className="app-collar" alt="Collar5" />
          </div>
          <div>
          <img src={collar2} width="500px" height="500px" className="app-collar" alt="Collar2" />
          </div>
          <div>
          <img src={collar3} width="575px" height="575px" className="app-collar" alt="Collar3" />
          </div>
          <div>
          <img src={collar7} width="575px" height="575px" className="app-collar" alt="Collar7" />
          </div>
        </Slider>
      </div>
    );
  }
}