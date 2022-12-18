import React from "react";
import style from "./style.module.scss";
function SubHeading({ children }) {
  return <h3 className={style["subHeading"]}>{children}</h3>;
}

export default SubHeading;
