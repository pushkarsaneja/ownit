import React from "react";
import style from "./style.module.scss";

const Anchor = ({ link, children, className, onClick }) => {
  return (
    <a
      href={link}
      className={`${style["hyperlink"]} ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Anchor;
