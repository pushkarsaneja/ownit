import React from "react";
import style from "./style.module.scss";

function Badge({ text, className, textColor, bgColor, children }) {
  if (!text) {
    return (
      <span
        style={{ color: textColor, background: bgColor }}
        className={`${style["badge"]}  ${className}`}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      style={{ color: textColor, background: bgColor }}
      className={`${style["badge"]}  ${className}`}
    >
      {text}
    </span>
  );
}

export default Badge;
