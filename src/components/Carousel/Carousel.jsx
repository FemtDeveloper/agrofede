import React from "react";
import primera from "../../assets/imgs/primera.jpg";
import sacha_index from "../../assets/imgs/sacha_index.jpg";
import cultivo from "../../assets/imgs/cultivo-tomates.webp";
import tractor from "../../assets/imgs/tractor.webp";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 h-80"
            src={primera}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={sacha_index} alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Sacha Inchi</h5>
            <p>Afiliate Ya!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={cultivo} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
