import React from "react";
import "./footer.css";
import Image1 from "../../assets/img/bm-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer_logo">
          <img src={Image1} alt="logo nbm" className="footer__title" />
        </div>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_black"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_black"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.twitter.com/"
            className="footer__social-link"
            target="_black"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; 2024 Emmet-Tech. All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
