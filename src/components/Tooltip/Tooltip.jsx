import React, { useState } from "react";

import "./Tooltip.css";

export const Tooltip = ({ children, text }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const onMouseEnterHandler = () => {
    setTimeout(() => {
      setShowToolTip(true);
    }, 750);
  };

  const onMouseLeaveHandler = () => {
    setTimeout(() => {
      setShowToolTip(false);
    }, 750);
  };
  return (
    <div
      className="tooltipWrapper"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {children}
      <div
        className="tooltipText"
        style={{
          opacity: showToolTip ? 1 : 0,
          transform: showToolTip ? "translateY(-10px)" : "translateY(-20px)",
        }}
      >
        {text}
      </div>
    </div>
  );
};
