import "./InformationMessage.css";
import React, { useEffect, useState } from "react";

export const useInformationMessage = () => {
  const [informText, setInformText] = useState("");

  const onShowing = (text) => setInformText(text);

  useEffect(() => {
    if (Boolean(informText)) {
      setTimeout(() => setInformText(""), 3000);
    }
  }, [informText, setInformText]);

  const component = (
    <div
      className="informationMessageWrapper"
      style={{
        opacity: informText ? "1" : "0",
        transform: informText ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {informText}
    </div>
  );

  return { component, onShowing };
};
