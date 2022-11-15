import React from "react";
import style from "./style.module.scss";

const Circular = ({ children, onClick, className }) => {
  return (
    <button
      className={`${style["circular-button"]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Circular;
