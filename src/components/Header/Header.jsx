import React from "react";

import "./Header.css";
import { MobileHeader } from "./MobileHeader";

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
            <a href="#contacts">Контакти</a>
          </li>
        </ul>
      </header>

      <MobileHeader />

      <div className="headerContentWrapper">
        <div>
          <h1>Катрусина читальня</h1>
          <h3>Простір, де живуть улюблені історії</h3>
        </div>

        <a href="#history">Про книгу</a>
      </div>
    </div>
  </div>
);
