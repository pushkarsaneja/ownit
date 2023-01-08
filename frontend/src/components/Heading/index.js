import React from "react";
import style from "./style.module.scss";

const Heading = ({ children,className }) => {
  return <h1 className={`${style["heading"]} ${className}`}>{children}</h1>;
};

export default Heading;
