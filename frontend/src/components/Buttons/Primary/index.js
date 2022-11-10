import React from "react";
import style from "./style.module.scss";

const Primary = ({ children, onClick, className = "" }) => {
  return (
    <button className={`${style["primary"]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Primary;
