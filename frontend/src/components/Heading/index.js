import React from "react";
import style from "./style.module.scss";

const Heading = ({ children }) => {
  return <h1 className={style["heading"]}>{children}</h1>;
};

export default Heading;
