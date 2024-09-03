import React, { useState, useEffect, useCallback } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4"
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // 3초마다 다음 슬라이드로 이동
    return () => clearInterval(slideInterval); // 컴포넌트가 언마운트될 때 인터벌 클리어
  }, [nextSlide]); // nextSlide를 의존성 배열에 추가

  return (
    <div className="banner">
      <button className="carousel-button left" onClick={prevSlide}>{'<'}</button>
      <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={nextSlide}>{'>'}</button>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
