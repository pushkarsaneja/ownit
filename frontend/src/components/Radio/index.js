import React from "react";
import style from "./style.module.scss";

const Radio = ({ children, className = "", onClick, active = false }) => {
  return (
    <div className={`${style["radio"]} ${className} `} onClick={onClick}>
      <div className={style["outer-circle"]}>
        <div
          className={`${style["inner-circle"]} ${
            active === true ? style["active"] : ""
          }`}
        ></div>
      </div>
      {children}
    </div>
  );
};

export default Radio;
