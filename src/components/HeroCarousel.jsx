import React, { useState, useEffect } from 'react';

// Defined inside the file but outside the component to prevent recreation on render.
const carouselData = [
  {
    id: 1,
    image: '/images/hero_nuts.png',
    title: "Premium Hand-Picked Nuts",
    subtitle: "Sourced ethically for your healthy lifestyle. Experience the crunch of perfection."
  },
  {
    id: 2,
    image: '/images/hero_spices.png',
    title: "Authentic Aromatic Spices",
    subtitle: "Enhance your culinary journey with traditional, vibrant flavors from local farms."
  },
  {
    id: 3,
    image: '/images/hero_cardamom.png',
    title: "Pure Green Cardamom",
    subtitle: "Hand-selected from the finest estates to bring exquisite aroma to your recipes."
  },
  {
    id: 4,
    image: '/images/hero_pickles.png',
    title: "Traditional Mixed Pickles",
    subtitle: "Authentic, aged, and crafted with traditional recipes to bring heritage to your table."
  },
  {
    id: 5,
    image: '/images/hero_fish.png',
    title: "Traditional Dry Fishes",
    subtitle: "Preserving the rich coastal heritage with authentic sun-drying techniques."
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section id="home" className="hero">
      {carouselData.map((slide, index) => (
        <div key={slide.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <img src={slide.image} alt={slide.title} className="slide-img" />
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <a href="#products" className="btn btn-primary">Explore Collection</a>
          </div>
        </div>
      ))}
      <div className="carousel-controls">
        <button className="control-btn" onClick={prevSlide} aria-label="Previous Slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div className="carousel-dots">
          {carouselData.map((_, index) => (
            <div 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
        <button className="control-btn" onClick={nextSlide} aria-label="Next Slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
