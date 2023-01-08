import React from "react";
import style from "./style.module.scss";

function ErrorProduct({ title, id, img, message }) {
  return (
    <div className={style["error-product"]}>
      <div className={style["left"]}>
        <img src={img} alt="product_image" width="100px" height="100px" />
      </div>
      <div className={style["right"]}>
        <table>
          <tr>
            <td className={style["label"]}>ID</td>
            <td className={style["value"]}>{id || "-"}</td>
          </tr>
          <tr>
            <td className={style["label"]}>Product</td>
            <td className={style["value"]}>{title || "-"}</td>
          </tr>
          <tr>
            <td className={style["label"]}>Reason</td>
            <td className={style["value"]}>{message || "-"}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ErrorProduct;
