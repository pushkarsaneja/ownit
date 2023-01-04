import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../components/Heading";
import style from "./style.module.scss";
import tick from "../../assets/images/tick.gif";
import rightArrow from "../../assets/icons/right-arrow.png";

//TODO
//1. isReceiver is hard coded, make it dynamic.
//2. add product_id in onclick function in product details div.

const TransactionInfo = () => {
  const { trxnId } = useParams();
  const navigate = useNavigate();
  const isReceiver = true;

  return (
    <div className={`${style["transaction-info"]} page`}>
      <Heading>Transaction Details</Heading>
      <div className={style["main-container"]}>
        <div className={style["transaction-details"]}>
          <div className={style["transaction-status"]}>
            <div
              className={`${style["text"]} ${
                style[isReceiver ? "green" : "red"]
              }`}
            >{`Asset ${isReceiver ? "received" : "transfered"}`}</div>
            <img className={style["tick-gif"]} src={tick} alt="" />
          </div>
          <div className={style["transaction-id"]}>
            <h3>Transaction Id:</h3>
            <h4>{trxnId}</h4>
          </div>
          <div className={style["time-date"]}>
            <div className={style["time"]}>12:00</div>
            <div className={style["date"]}>12/12/23</div>
          </div>
        </div>
        <div
          className={style["product-details"]}
          onClick={() => {
            navigate(`/product/12345`);
          }}
        >
          <img
            className={style["prod-img"]}
            src="https://pngimg.com/uploads/watches/watches_PNG9869.png"
            alt=""
          />

          <div className={style["details"]}>
            <div className={style["prod-name"]}>Hampden Watch</div>
            <div className={style["prod-id"]}>63a72c1f9a7d38d7b41551e6</div>
          </div>
        </div>
        <div className={style["transaction-between"]}>
          <div className={style["from"]}>
            <img className={style["right-arrow"]} src={rightArrow} alt="" />
            <div className={style["text"]}>From</div>
            <div className={style["sender-name"]}>Sher Singh</div>
            <div className={style["address"]}>637d32bab71f2409811a03ee</div>
          </div>
          <div className={style["to"]}>
            <div className={style["text"]}>To</div>
            <div className={style["receiver-name"]}>Pushkar Saneja</div>
            <div className={style["address"]}>637d32bab71f2409811a03ee</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfo;
