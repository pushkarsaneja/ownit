import React from "react";
import style from "./style.module.scss";

const Primary = ({ children, onClick, disabled, className = "" }) => {
  return (
    <button
      disabled={disabled}
      className={`${style["primary"]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Primary;
