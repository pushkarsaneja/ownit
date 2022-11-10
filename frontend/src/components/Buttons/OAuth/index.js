import React from "react";
import style from "./style.module.scss";

const OAuth = ({ img, children, className = "", onClick }) => {
  return (
    <button className={`${style["o-auth"]} ${className}`} onClick={onClick}>
      <img src={img} alt="signup" />
      {children}
    </button>
  );
};

export default OAuth;
