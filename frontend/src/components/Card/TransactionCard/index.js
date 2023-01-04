import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import notFound from "../../../assets/images/imgNotFound.webp";
import Ghost from "../../Buttons/Ghost";

const currentOwner = "4102787667";

const TransactionCard = ({
  id = "2206974095",
  to = "4102787667",
  to_name = "Pushkar",
  from_name = "Sher",
  from = "6883237943",
  prod_name = "Speakers",
  date = "23-12-22",
  img = "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_8549ad38-acec-45d6-bba4-8b202a9bfdc1_600x.png?v=1646976976",
  cost = "1234",
}) => {
  const isReceiver = currentOwner === to;
  const navigate = useNavigate();
  return (
    <div
      className={`${style["transaction-card"]}`}
      onClick={() => {
        navigate(`/transaction/${id}`);
      }}
    >
      <img className={style["prod-img"]} src={img} alt="" />
      <div className={style["details"]}>
        <div className={style["left"]}>
          <div className={style["id"]}>
            Transaction Id : <span className={style["highlight"]}>{id}</span>
          </div>
          <div className={style["name"]}>
            {!isReceiver ? `To : ` : `From : `}
            <span className={style["highlight"]}>
              {!isReceiver ? to_name : from_name}
            </span>
          </div>
          <div className={style["address"]}>
            Address :{" "}
            <span className={style["highlight"]}>
              {!isReceiver ? to : from}
            </span>
          </div>
          <div className={style["product-name"]}>
            Product : <span className={style["highlight"]}>{prod_name}</span>
          </div>
        </div>
        <div className={style["right"]}>
          <div className={style["date"]}>
            <span className={style["text"]}>Date : </span>
            {date}
          </div>
          <div className={style["cost"]}>₹{cost}</div>
          <Ghost className={style["transaction-details"]}>More Details</Ghost>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
