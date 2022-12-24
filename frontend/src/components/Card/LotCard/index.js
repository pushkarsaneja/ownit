import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import notFound from "../../../assets/images/imgNotFound.webp";
import Ghost from "../../Buttons/Ghost";

const LotCard = ({
  id = "XXXX",
  name = "Test Lot",
  qty = 11,
  date = "DD-MM-YY",
  img = notFound,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${style["lot-card"]}`}
      onClick={() => {
        navigate(`/lot/${id}`);
      }}
    >
      <img className={style["prod-img"]} src={img} alt="" />
      <div className={style["details"]}>
        <div className={style["left"]}>
          <div className={style["id"]}>{id}</div>
          <div className={style["name"]}>{name}</div>
          <div className={style["qty"]}>
            <div className={style["text"]}>QTY</div>
            <div className={style["value"]}>{qty}</div>
          </div>
        </div>
        <div className={style["right"]}>
          <div className={style["date"]}>
            <span className={style["type"]}>LOT : </span>
            {date}
          </div>

          <Ghost className={style["view-products"]}>View Products</Ghost>
        </div>
      </div>
    </div>
  );
};

export default LotCard;
