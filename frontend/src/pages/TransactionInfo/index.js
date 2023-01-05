import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../components/Heading";
import style from "./style.module.scss";
import tick from "../../assets/images/tick.gif";
import rightArrow from "../../assets/icons/right-arrow.png";
import { useState } from "react";
import { getTransactionInfo } from "./logic";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";

//TODO
//1. isReceiver is hard coded, make it dynamic.
//2. add product_id in onclick function in product details div.

const TransactionInfo = () => {
  const { trxnId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { id } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [isReceiver, setIsReceiver] = useState(null);
  const alert = useAlert();

  useEffect(() => {
    setLoading(true);
    getTransactionInfo(trxnId)
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        alert.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [trxnId]);

  useEffect(() => {
    if (data) {
      if (id.toString() === data.to._id) setIsReceiver(true);
      else setIsReceiver(false);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!loading && !data) return <h4>No transaction</h4>;
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
            <div className={style["time"]}>
              {new Date(data.timestamp).toLocaleTimeString()}
            </div>
            <div className={style["date"]}>
              {new Date(data.timestamp).toLocaleDateString()}
            </div>
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
            src={data.product.images[0] || ""}
            alt=""
          />

          <div className={style["details"]}>
            <div className={style["prod-name"]}>
              {data.product.title || "-"}
            </div>
            <div className={style["prod-id"]}>{data.product._id}</div>
          </div>
        </div>
        <div className={style["transaction-between"]}>
          <div className={style["from"]}>
            <img className={style["right-arrow"]} src={rightArrow} alt="" />
            <div className={style["text"]}>From</div>
            <div className={style["sender-name"]}>{data.from.name}</div>
            <div className={style["address"]}>{data.from._id}</div>
          </div>
          <div className={style["to"]}>
            <div className={style["text"]}>To</div>
            <div className={style["receiver-name"]}>{data.to.name}</div>
            <div className={style["address"]}>{data.to._id}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfo;
