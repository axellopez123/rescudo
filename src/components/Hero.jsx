import React from "react";
import img1 from '../assets/1.webp'
import img2 from '../assets/2.jpg'

import img3 from '../assets/3.webp'

import img4 from '../assets/4.jpg'

const Hero = () => {
  return (
    <div className="position-relative">

      <div
        id="myCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner h-[300px] md:h-[500px]">

          {/* <div className="carousel-item active" data-bs-interval="1000">
            <img
              src={img1}
              className="d-block w-100 h-100 object-cover"
              alt="Slide 1"
            />
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={img2}
              className="d-block w-100 h-100 object-cover"
              alt="Slide 2"
            />
          </div> */}

          <div className="carousel-item" data-bs-interval="5000">
            <img
              src={img3}
              className="d-block w-100 h-100 object-cover"
              alt="Slide 3"
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src={img4}
              className="d-block w-100 h-100 object-cover"
              alt="Slide 3"
            />
          </div>
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>


    </div>
  );
};

export default Hero;
