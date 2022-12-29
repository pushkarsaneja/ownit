import React from "react";
import style from "./style.module.scss";
function BannerMessage({ text, color = "danger", className, children }) {
  return (
    <div className={`${style["message"]} ${style[color]} ${className}`}>
      <p>{text ? text : children}</p>
    </div>
  );
}

export default BannerMessage;
