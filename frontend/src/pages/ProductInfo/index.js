import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Heading from "../../components/Heading";
import TimeLine from "../../components/timeline";
import { currentProductActions } from "../../redux/currentProduct";
import { getProduct } from "../VerifyProduct/logic";
import style from "./style.module.scss";

const ProductInfo = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.currentProduct);
  if (product) {
    var { _id, title, description, createdAt, price, images } = product;
  }

  useEffect(() => {
    if (!product) {
      setLoading(true);
      getProduct(params.refId).then((product) => {
        dispatch(currentProductActions.setCurrentProduct(product));
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <h1>Loading ....</h1>;

  return (
    <div className={style["productInfoWrapper"]}>
      <div className={style["productDetailsWrapper"]}>
        <Heading>Product Details</Heading>
        <header className={style["header"]}>
          <div className={style["info"]}>
            <label>Ref id : </label>
            <p>{_id}</p>
          </div>
          <div className={style["info"]}>
            <label>Manufactured on : </label>
            <p>{createdAt?.substr(0, 10) || "no-data"}</p>
          </div>
        </header>
        <div className={style["imageWrapper"]}>
          {images && images.length === 0 ? (
            <img src="https://picsum.photos/300/300" />
          ) : (
            <img src={images ? images[0] : ""} />
          )}
        </div>
        <div className={style["productDetails"]}>
          <h2 className={style["productTitle"]}>{title}</h2>
          <p className={style["productDescription"]}>{description}</p>
          <h3 className={style["productPrice"]}>₹ {price}</h3>
        </div>
      </div>
      <div className={style["ownershipTimelineWrapper"]}>
        <Heading>Ownership Timeline</Heading>
        <TimeLine />
      </div>
    </div>
  );
};

export default ProductInfo;
