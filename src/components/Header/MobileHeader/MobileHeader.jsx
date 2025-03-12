import React, { useEffect, useState } from "react";

import "./MobileHeader.css";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="mobileHeaderWrapper">
      <div
        id="mobile-header-icon"
        className={isOpen ? "open" : ""}
        onClick={toggleOpen}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <header>
        <div className={`menuItemsWrapper ${isOpen ? "menuOpen" : ""}`}>
          <ul>
            <li onClick={toggleOpen}>
              <a href="#about-author">Про автора</a>
            </li>
            <li onClick={toggleOpen}>
              <a href="#history">Про книгу</a>
            </li>
            <li onClick={toggleOpen}>
              <a href="#contacts">Контакти</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
