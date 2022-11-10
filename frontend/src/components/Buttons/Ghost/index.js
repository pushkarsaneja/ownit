import React from "react";
import style from "./style.module.scss";

const Ghost = ({ children, onClick, className = "", color = "primary" }) => {
  return (
    <button
      className={`${style["ghost"]} ${style[color]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Ghost;
