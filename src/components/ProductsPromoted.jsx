import React, { Component } from "react";
import Slider from "react-slick";
import collar1 from '../assets/images/collar1.jpg'
import collar2 from '../assets/images/collar2.jpg'
import collar3 from '../assets/images/collar3.jpg'
import collar4 from '../assets/images/collar4.jpg'


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
      dots: true,
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
        <h2> Productos destacados </h2>
        <Slider {...settings}>
          <div>
          <img src={collar1} width="500px" height="500px" className="app-collar" alt="Collar1" />
          </div>
          <div>
          <img src={collar2} width="500px" height="500px" className="app-collar" alt="Collar2" />
          </div>
          <div>
          <img src={collar3} width="500px" height="500px" className="app-collar" alt="Collar3" />
          </div>
          <div>
          <img src={collar4} width="575px" height="575px" className="app-collar" alt="Collar4" />
          </div>
        </Slider>
      </div>
    );
  }
}


