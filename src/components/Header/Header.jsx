import React from "react";

import "./Header.css";

export const Header = () => (
  <div className="wrapper">
    <div className="wrapperCover">
      <header className="headerWrapper">
        <ul>
          <li>
            <a href="#about-author">Про автора</a>
          </li>
          <li>
            <a href="#history">Про книгу</a>
          </li>
          <li>
            <a href="/">Контакти</a>
          </li>
        </ul>
      </header>

      <div className="headerContentWrapper">
        <h1>Катрусина читальня</h1>
        <h3>Простір, де живуть улюблені історії</h3>

        <a href="#history">Про книгу</a>
      </div>
    </div>
  </div>
);
