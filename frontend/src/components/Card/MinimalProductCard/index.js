import React from "react";
import notFound from "../../../assets/images/imgNotFound.webp";
import style from "./style.module.scss";

function MinimalProductCard({
  id = "XXXX",
  name = "Test Produc dsfds t",
  img = notFound,
}) {
  return (
    <div className={`${style["product-card"]}`}>
      <img
        className={style["prod-img"]}
        src={img}
        alt=""
        width="100px"
        height="100px"
      />
      <div className={style["details"]}>
        <div className={style["name"]}>{name}</div>
      </div>
    </div>
  );
}

export default MinimalProductCard;
