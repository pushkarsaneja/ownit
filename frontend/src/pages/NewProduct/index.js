import React, { useState } from "react";
import Heading from "../../components/Heading";
import style from "./style.module.scss";
import addIconWhite from "../../assets/icons/plusWhite.png";
import InputHandler from "../../components/InputHandler";
import Primary from "../../components/Buttons/Primary";
import http from "../../lib/http";
import PhotoEditor from "../../components/PhotoEditor";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const NewProduct = () => {
  const alert = useAlert();
  const [formData, setFormData] = useState({
    categories: [""],
  });
  const navigate = useNavigate();
  const [imgData, setImgData] = useState({});

  console.log(formData);

  const onsubmitHandler = async () => {
    //Handle Submit Here
    console.log(imgData);
    try {
      const data = await http("/api/v1/add-product", "POST", {
        title: formData.productName,
        price: formData.MRP,
        categories: formData.categories,
        description: formData.description,
        images: [imgData.imgFile],
        quantity: formData.qty,
      });

      alert.success("Product Created");
      navigate("/profile");
    } catch (err) {
      alert.error("Some Error Occured while creting product");
    }
  };

  return (
    <div className={`${style["new-product-page"]} page`}>
      <Heading>Add New Product</Heading>
      <div className={style["main-container"]}>
        <PhotoEditor imgData={imgData} setImgData={setImgData} />
        <div className={style["form-fields"]}>
          <InputHandler
            className={style["input"]}
            placeholder="Product name"
            value={formData.productName}
            onChange={(e) => {
              setFormData({ ...formData, productName: e.target.value });
            }}
          />
          <div className={style["categories-container"]}>
            {formData.categories.map((ele, index) => {
              return (
                <InputHandler
                  key={index}
                  placeholder={
                    index === 0 ? "category" : `sub-category ${index}`
                  }
                  value={ele}
                  onChange={(e) => {
                    const tempArr = formData.categories;
                    tempArr[index] = e.target.value;
                    setFormData({ ...formData, categories: tempArr });
                  }}
                />
              );
            })}
            <Primary
              className={style["add-category-button"]}
              onClick={() => {
                const tempArr = formData.categories;
                tempArr.push("");
                setFormData({ ...formData, categories: tempArr });
              }}
            >
              <img className={style["add-icon"]} src={addIconWhite} alt="" />
            </Primary>
          </div>
          <InputHandler
            className={style["input"]}
            placeholder="MRP"
            value={formData.MRP}
            onChange={(e) => {
              setFormData({ ...formData, MRP: e.target.value });
            }}
          />
          <InputHandler
            className={`${style["input"]} ${style["description"]}`}
            placeholder="Description"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />
          <InputHandler
            className={style["input"]}
            placeholder="Quantity"
            value={formData.qty >= 1 ? formData.qty : ""}
            type="number"
            onChange={(e) => {
              setFormData({ ...formData, qty: e.target.value });
            }}
          />
        </div>
      </div>
      <Primary onClick={onsubmitHandler}>
        {formData.qty > 1 ? "Add Products" : "Add Product"}
      </Primary>
    </div>
  );
};

export default NewProduct;
