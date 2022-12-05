import React from 'react';
import Banner1 from '../../../Assets/image/Banner/Banner1.jpg';
import Banner2 from '../../../Assets/image/Banner/Banner2.jpg';
import Banner3 from '../../../Assets/image/Banner/Banner3.jpg';

const Carousel = () => {
    return (
        <div>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img alt='' src={Banner1} className="w-full h-3/4" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={Banner2} alt='' className="w-full h-3/4" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={Banner3} className="w-full h-3/4" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
        </div>
    );
};

export default Carousel;