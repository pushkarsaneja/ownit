import React from "react";
import Rectangle from "../../components/Buttons/Rectangle";
import ErrorProduct from "../../components/Card/ErrorProduct";
import style from "./style.module.scss";

function ErrorProducts({ errorProducts, handleClose, setToggle }) {
  return (
    <div className={`${style["errorProductsWrapper"]}`}>
      <h1
        style={{ color: "crimson", textAlign: "center" }}
      >{`Error in uploading ${errorProducts.length} products 😟`}</h1>
      <div
        className={`${style["productsListWrapper"]}`}
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        {errorProducts.map(({ title, id, img, message }, idx) => (
          <ErrorProduct
            key={idx}
            title={title}
            id={id}
            img={img}
            message={message}
          />
        ))}
      </div>
      <Rectangle
        color="success"
        onClick={() => {
          handleClose();
          setToggle((pre) => !pre);
        }}
      >
        Try Again
      </Rectangle>
    </div>
  );
}

export default ErrorProducts;
