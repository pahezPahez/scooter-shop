import React, { useState, useEffect } from 'react';
import './Banner.css';
import image1 from '../assets/banner/blackfriday.webp'
import image2 from '../assets/banner/delivery.webp'
import image3 from '../assets/banner/gbg1.webp'
import image4 from '../assets/banner/gbg2.webp'

const Banner = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Переключение каждые 3 секунды

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner">
      <div className="banner__images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Banner ${index}`} className="banner__image" />
        ))}
      </div>
    </div>
  );
};

export default Banner;