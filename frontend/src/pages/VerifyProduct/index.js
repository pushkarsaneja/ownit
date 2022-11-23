import React, { useState } from "react";
import style from "./style.module.scss";
import Heading from "../../components/Heading";
import InputHandler from "../../components/InputHandler";
import QrImg from "../../assets/icons/qr-code.png";
import Primary from "../../components/Buttons/Primary";
import { useNavigate } from "react-router-dom";
import { getProduct } from "./logic";
import { currentProductActions } from "../../redux/currentProduct";
import { useDispatch } from "react-redux";
const VerifyProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [refId, setRefId] = useState("");

  const onVerify = async (e) => {
    e.preventDefault();
    if (refId.trim() === "") return;
    try {
      const product = await getProduct(refId);
      dispatch(currentProductActions.setCurrentProduct(product));
      navigate(`/productinfo/${refId}`);
    } catch (err) {
      console.log("Product Not found");
    }
  };

  const onInputChange = (e) => {
    setRefId(e.target.value);
  };

  return (
    <div className={`${style["verify-product-page"]} page`}>
      <div className={style["left-container"]}>
        <h1>Verify Your Product Easily</h1>
        <h2>Enter your Reference Id or Scan and it's done.</h2>
      </div>
      <div className={style["right-container"]}>
        <form>
          <Heading>Verify Product</Heading>
          <button
            className={style["scan-button"]}
            onClick={(e) => {
              e.preventDefault();
              navigate("/verifyproduct/scan");
            }}
          >
            <img src={QrImg} alt="scan QR" />
          </button>
          <InputHandler
            placeholder="enter product ref id"
            onChange={onInputChange}
            value={refId}
          />
          <Primary onClick={onVerify}>Verify</Primary>
        </form>
      </div>
    </div>
  );
};

export default VerifyProduct;
