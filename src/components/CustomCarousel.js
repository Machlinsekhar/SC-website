import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Carousel.css'; // Custom CSS
import one from '../images/carousel/1.png';
import two from '../images/carousel/2.png';
import three from '../images/carousel/3.png';
import four from '../images/carousel/4.png';
import five from '../images/carousel/5.png';
import Slider from 'react-slick';

const images = [
  one, two, three, four, five
];

const CustomCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay:true,
    autoplaySpeed: 3000,
    speed: 1500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Number of slides on desktop
        
        },
      },],
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="Carousel justify-between items-center ">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} className='rounded-custom' />
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default CustomCarousel;
