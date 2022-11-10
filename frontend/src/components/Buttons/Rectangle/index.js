import React from "react";
import style from "./style.module.scss";

const Rectangle = ({
  children,
  onClick,
  className = "",
  color = "primary",
}) => {
  return (
    <button
      className={`${style["rectangle"]} ${style[color]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Rectangle;
