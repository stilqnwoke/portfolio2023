import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Georgiev</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#certificates" className="footer__link">
              Certificates
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="" className="home__social-icon" target="_blank">
            <i class="bx bxl-facebook"></i>
          </a>

          <a href="" className="home__social-icon" target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-github-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
