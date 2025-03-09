import React, { useEffect } from "react";

import closeIcon from "../../assets/icons/close.svg";

import "./Modal.css";

export const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modalWrapper" onClick={onClose}>
      <div className="modalContentWrapper" onClick={(e) => e.stopPropagation()}>
        <button className="modalCloseIcon" onClick={onClose}>
          <img src={closeIcon} alt="CLose" />
        </button>
        {children}
      </div>
    </div>
  );
};
