import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import notFound from "../../../assets/images/imgNotFound.webp";
import Ghost from "../../Buttons/Ghost";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id = "XXXX",
  name = "Test Product",
  nft = "HASHXXXXXXXX",
  date = "DD-MM-YY",
  img = notFound,
  isOwner = false,
  selectMode= false,
  onClick=()=>{},
}) => {
  const navigate = useNavigate();

  const [isSelected, setIsSelected] = useState(false);

  useEffect(()=>{
    setIsSelected(false);
  },[selectMode]);

  return (
    <div
      className={`${style["product-card"]} ${isSelected?style["selected"]:''}`}
      onClick={(e) => {
        if(!selectMode)
          navigate(`/product/${id}`);
          else{
            setIsSelected(prev=>!prev);
            onClick();
          }
      }}
    >
      <img className={style["prod-img"]} src={img} alt="" />
      <div className={style["details"]}>
        <div className={style["left"]}>
          <div className={style["id"]}>{id}</div>
          <div className={style["name"]}>{name}</div>
          <div className={style["nft"]}>
            <div className={style["text"]}>NFT</div>
            <div className={style["hash"]}>{nft}</div>
          </div>
        </div>
        <div className={style["right"]}>
          <div className={style["date"]}>
            <span
              className={`${style["owner"]} ${
                isOwner ? style["green"] : style["red"]
              }`}
            >
              {isOwner ? "Owned On : " : "Sold On : "}
            </span>
            {date}
          </div>
          <Ghost className={style["view-details"]}>View Details</Ghost>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
