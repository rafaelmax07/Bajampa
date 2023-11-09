"use client"

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Defina o número de marcas visíveis por vez
    slidesToScroll: 1,
    autoplay: true, // Ative o modo de reprodução automática
    autoplaySpeed: 3000, // Defina o intervalo de tempo entre os slides (em milissegundos)
  };

  const brands = [  
    {
    name: "SAE BRASIL",
    imageUrl: "./images/saelogo.png"
    ,
  },
  {
    name: "IFPB",
    imageUrl: "./images/ifpblogo.png",
  },
  {
    name: "Puma",
    imageUrl: "",
  },
  {
    name: "Reebok",
    imageUrl: "",
  },
  {
    name: "New Balance",
    imageUrl: "",
  },
  {
    name: "Under Armour",
    imageUrl: "",
  }, ];

  return (
    <div className="carousel-container ">
      <h2 className='text-center m-b-5 text-4xl font-bold leading-snug text-dark sm:text-[37px] lg:text-[37px] xl:text-[37px]'>Nossos Apoiadores:</h2>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            <img src={brand.imageUrl} alt={brand.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
