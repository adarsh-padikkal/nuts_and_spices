import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about-content">
        <div className="about-text">
          <h3>A Legacy of <span>Quality</span></h3>
          <p>At Kalyan Foods, we believe that food is not just about sustenance; it's about tradition, flavor, and bringing people together. We have dedicated ourselves to sourcing only the finest ingredients.</p>
          <p>From the crispness of our hand-picked nuts to the rich aroma of our ground spices and the authentic taste of our dry fishes, every product represents our commitment to excellence.</p>
          
          <div className="features">
            <div className="feature">
              <h4>100% Natural</h4>
              <p>No artificial preservatives or additives in our products.</p>
            </div>
            <div className="feature">
              <h4>Ethically Sourced</h4>
              <p>Working directly with farmers to ensure fair trade practices.</p>
            </div>
            <div className="feature">
              <h4>Premium Quality</h4>
              <p>Rigorous quality checks before anything reaches your table.</p>
            </div>
            <div className="feature">
              <h4>Authentic Taste</h4>
              <p>Preserving traditional methods for genuine flavor.</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="/images/about_legacy.png" alt="A Legacy of Quality - Kalyan Foods" />
        </div>
      </div>
    </section>
  );
};

export default About;
