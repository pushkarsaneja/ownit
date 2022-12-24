import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Rectangle from "../../components/Buttons/Rectangle";
import Heading from "../../components/Heading";
import TimeLine from "../../components/timeline";
import { currentProductActions } from "../../redux/currentProduct";
import { getProduct } from "../VerifyProduct/logic";
import style from "./style.module.scss";
import TransferOwnershipModal from "./TransferOwnershipModal";

const ProductInfo = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [OTOpen, setOTOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { product } = useSelector((state) => state.currentProduct);

  const { id } = useSelector((state) => state.user);

  if (product) {
    var { _id, title, description, createdAt, price, images, currentOwner } =
      product;
  }

  const handleClose = () => {
    setOTOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    getProduct(params.refId)
      .then((product) => {
        dispatch(currentProductActions.setCurrentProduct(product));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.refId]);

  if (loading) return <h1>Loading ....</h1>;
  if (!loading && !_id)
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Product does exists</h3>
      </div>
    );
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
        {currentOwner && id && currentOwner.toString() === id.toString() && (
          <div className="actionBtnsWrapper">
            <Rectangle onClick={() => setOTOpen(true)}>
              Transfer Ownership
            </Rectangle>
            <Rectangle>Report Stolen</Rectangle>
          </div>
        )}
      </div>

      <div className={style["ownershipTimelineWrapper"]}>
        <Heading>Ownership Timeline</Heading>
        <TimeLine />
      </div>

      {/* Modal */}
      <TransferOwnershipModal open={OTOpen} handleClose={handleClose} />
    </div>
  );
};

export default ProductInfo;
