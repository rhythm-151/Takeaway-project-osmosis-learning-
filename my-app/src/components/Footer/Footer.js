import React from 'react';
import './Footer.css';
import img from './img3.png';

const Footer = () => {
  return (
    <body>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <img
          className="logo"
          src={img}
          alt="Osmosis Learn"
        />
        <div className="footer-text"><h4>We Love To Hear From You</h4></div>
      </div>
    </footer>
    </body>
  );
};

export default Footer;

