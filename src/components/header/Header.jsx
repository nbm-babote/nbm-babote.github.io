import React, { useState } from "react";
import "./header.css";
import * as Unicons from "@iconscout/react-unicons";

const Header = () => {
  /* ========== Toggle Menu ========== */
  const [Toggle, showMenu] = useState(false);

  return (
    <div className="header">
      <nav className="nav container">
        <a href="inex.html" className="nav__logo">
          N. Mardochée
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <Unicons.UilEstate className="nav__icon" /> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <Unicons.UilUser className="nav__icon" /> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <Unicons.UilFileAlt className="nav__icon" /> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <Unicons.UilBriefcaseAlt className="nav__icon" /> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <Unicons.UilScenery className="nav__icon" /> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <Unicons.UilMessage className="nav__icon" /> Contact
              </a>
            </li>
          </ul>

          <Unicons.UilTimes
            className="nav__close"
            onClick={() => showMenu(!Toggle)}
          />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <Unicons.UilApps />
        </div>
      </nav>
    </div>
  );
};

export default Header;
