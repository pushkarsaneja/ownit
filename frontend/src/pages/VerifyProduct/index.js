import React, { useState } from "react";
import style from "./style.module.scss";
import Heading from "../../components/Heading";
import InputHandler from "../../components/InputHandler";
import QrImg from "../../assets/icons/qr-code.png";
import Primary from "../../components/Buttons/Primary";
import { useNavigate } from "react-router-dom";
import { getProduct } from "./logic";
import { useAlert } from "react-alert";
import Loading from "../../components/Loading";

const VerifyProduct = () => {
  const navigate = useNavigate();
  const [refId, setRefId] = useState("");
  const [loading, setLoading] = useState(false);
  const alert = useAlert();
  const onVerify = async (e) => {
    e.preventDefault();
    if (refId.trim() === "") return;
    setLoading(true);
    try {
      await getProduct(refId);
      navigate(`/product/${refId}`);
    } catch (err) {
      alert.error("Product Not Found");
      console.log("Product Not found");
    } finally {
      setLoading(false);
    }
  };

  const onInputChange = (e) => {
    setRefId(e.target.value);
  };

  return (
    <div className={`${style["verify-product-page"]}`}>
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
          <Primary onClick={onVerify} disabled={loading ? true : false}>
            {loading ? (
              <Loading width={"50px"} height="50px" message={"Verifying"} />
            ) : (
              "Verify"
            )}
          </Primary>
        </form>
      </div>
    </div>
  );
};

export default VerifyProduct;
