import React, { useState } from "react";
import Heading from "../../components/Heading";
import style from "./style.module.scss";
import AvatarEditor from "react-avatar-editor";
import addIcon from "../../assets/icons/plus.png";
import addIconWhite from "../../assets/icons/plusWhite.png";
import InputHandler from "../../components/InputHandler";
import Primary from "../../components/Buttons/Primary";

const NewProduct = () => {
  const [formData, setFormData] = useState({
    img: null,
    categories: [""],
  });
  const [zoom, setZoom] = useState(1);

  const onSelectHandler = (e) => {
    setFormData({ ...formData, img: URL.createObjectURL(e.target.files[0]) });
    console.log(formData);
  };

  const onsubmitHandler = () => {
    //Handle Submit Here
    console.log(formData);
  };

  return (
    <div className={style["new-product-page"]}>
      <Heading>Add New Product</Heading>
      <div className={style["main-container"]}>
        <div className={style["image-editor-container"]}>
          <div className={style["image-editor"]}>
            <AvatarEditor
              className={style["product-image"]}
              border={0}
              image={formData.img}
              scale={zoom}
              height={300}
              width={300}
            />

            <label
              className={`${style["add-image-icon"]} ${
                formData.img ? style["hide"] : ""
              }`}
            >
              <img src={addIcon} alt="add" />
              <input
                className={style["file-input"]}
                type="file"
                onChange={onSelectHandler}
              />
            </label>

            <label className={style["select-another"]}>
              <div
                className={`${style["select-another"]} ${
                  formData.img ? "" : style["hide"]
                }`}
              >
                Select Another
              </div>

              <input
                className={style["file-input"]}
                type="file"
                onChange={onSelectHandler}
              />
            </label>
          </div>

          <h3 className={style["zoom-heading"]}>Adjust zoom:</h3>

          <input
            className={style["slider"]}
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            value={zoom}
            onChange={(e) => {
              setZoom(Number(e.target.value));
            }}
          />
        </div>
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
        </div>
      </div>
      <Primary onClick={onsubmitHandler}>Add Product</Primary>
    </div>
  );
};

export default NewProduct;
