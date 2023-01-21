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
import notFound from "../../assets/images/imgNotFound.webp";
import Primary from "../../components/Buttons/Primary";
import ReportStolenModal from "./ReportStolenModal";
import BannerMessage from "../../components/bannerMessage";
import { markFound } from "./logic";
import { useAlert } from "react-alert";
import cautionSign from "../../assets/icons/caution-sign.png";
import Loading from "../../components/Loading";

const ProductInfo = () => {
  const params = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();
  const [OTOpen, setOTOpen] = useState(false);
  const [RSOpen, setRSOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const { product } = useSelector((state) => state.currentProduct);
  const [showQR, setShowQR] = useState(false);
  const { id } = useSelector((state) => state.user);

  if (product) {
    var {
      _id,
      title,
      description,
      createdAt,
      price,
      images,
      currentOwner,
      reportId,
      token,
    } = product;
  }

  const handleClose = () => {
    setOTOpen(false);
  };

  const handleFound = async () => {
    markFound(reportId, _id)
      .then((res) => {
        alert.success("Marked found");
        setToggle((pre) => !pre);
      })
      .catch((err) => {
        alert.error(err);
      });
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
  }, [params.refId, toggle]);

  if (loading) return <Loading />;
  if (!loading && !_id)
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Product does not exist</h3>
      </div>
    );
  return (
    <div className={style["productInfoWrapper"]}>
      <div className={style["productDetailsWrapper"]}>
        <Heading>Product Details</Heading>
        {reportId && (
          <div className={style["stolen-message"]}>
            <img src={cautionSign} alt="" />
            This product was reported STOLEN.
          </div>
          // <BannerMessage
          //   text="This product is reported as STOLEN"
          //   color="danger"
          // />
        )}
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
          <img
            src={
              showQR
                ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${_id}`
                : images && images.length === 0
                ? notFound
                : images[0]
            }
            alt=""
          />
        </div>
        <Primary
          onClick={() => {
            setShowQR((prev) => !prev);
          }}
        >
          {showQR ? "Hide QR" : "Reveal QR"}
        </Primary>
        <div className={style["productDetails"]}>
          <h2 className={style["productTitle"]}>{title}</h2>
          <p className={style["productDescription"]}>{description}</p>
          <h3 className={style["productPrice"]}>₹ {price}</h3>
        </div>
        {currentOwner && id && currentOwner.toString() === id.toString() && (
          <div className={style["actionBtnsWrapper"]}>
            {!reportId ? (
              <>
                <Rectangle
                  onClick={() => setOTOpen(true)}
                  className={style["transfer-btn"]}
                >
                  Transfer Ownership
                </Rectangle>
                <Rectangle
                  className={style["report"]}
                  onClick={() => setRSOpen(true)}
                >
                  Report Stolen
                </Rectangle>
              </>
            ) : (
              <>
                <Rectangle onClick={handleFound}>Report Found</Rectangle>
              </>
            )}
          </div>
        )}
      </div>

      <div className={style["ownershipTimelineWrapper"]}>
        <Heading>Ownership Timeline</Heading>
        <TimeLine />
      </div>

      {/* Modal */}
      <TransferOwnershipModal
        open={OTOpen}
        handleClose={handleClose}
        setToggle={setToggle}
        selectedProducts={[{ id: _id, img: images[0], title, token }]}
      />
      <ReportStolenModal
        open={RSOpen}
        handleClose={() => setRSOpen(false)}
        setToggle={setToggle}
      />
    </div>
  );
};

export default ProductInfo;
