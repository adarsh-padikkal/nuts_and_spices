import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer-advanced">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand-title">
            <Logo className="brand-logo" />
            <h2>Kalyan<span>Foods</span></h2>
          </div>
          <p>Delivering nature's finest quality nuts, spices, and traditional dry fishes directly to your doorstep. Experience the authentic taste of tradition.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kalyan Foods. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
