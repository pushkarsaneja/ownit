import React, { useRef, useState } from "react";
import Heading from "../../components/Heading";
import style from "./style.module.scss";
import AvatarEditor from "react-avatar-editor";
import addIcon from "../../assets/icons/plus.png";
import addIconWhite from "../../assets/icons/plusWhite.png";
import close from "../../assets/icons/close.png";
import check from "../../assets/icons/check.png";
import InputHandler from "../../components/InputHandler";
import Primary from "../../components/Buttons/Primary";
import Circular from "../../components/Buttons/Circular";
import http from "../../lib/http";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [formData, setFormData] = useState({
    imgURL: null,
    imgFile: null,
    categories: [""],
  });
  const navigate = useNavigate();
  console.log(formData);
  const alert = useAlert();
  const [zoom, setZoom] = useState(1);

  const [hide, setHide] = useState(true);

  const canvasRef = useRef();

  const onSelectHandler = (e) => {
    setHide(false);
    setFormData({
      ...formData,
      imgURL: URL.createObjectURL(e.target.files[0]),
    });
    console.log(formData);
  };

  const confirmSelection = () => {
    setHide(true);
    canvasRef.current.getImageScaledToCanvas().toBlob((blob) => {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        setFormData({ ...formData, imgFile: reader.result });
      };
    });
  };

  const discardSelection = () => {
    setHide(true);
    setFormData({ ...formData, imgFile: null, imgURL: null });
  };

  const onsubmitHandler = async () => {
    //Handle Submit Here
    try {
      const data = await http("/api/v1/add-product", "POST", {
        title: formData.productName,
        price: formData.MRP,
        categories: formData.categories,
        description: formData.description,
        images: [formData.imgFile],
      });
      console.log(data);
      alert.success("Product Created");
      navigate("/verifyproduct");
    } catch (err) {
      alert.error("Some Error Occured while creting product");
    }
  };

  return (
    <div className={`${style["new-product-page"]} page`}>
      <Heading>Add New Product</Heading>
      <div className={style["main-container"]}>
        <div className={style["image-editor-container"]}>
          <div className={style["image-editor"]}>
            <AvatarEditor
              ref={canvasRef}
              className={style["product-image"]}
              border={0}
              image={formData.imgURL}
              scale={zoom}
              height={300}
              width={300}
              onChange={() => {
                console.log("Hello");
              }}
            />

            <label
              className={`${style["add-image-icon"]} ${
                formData.imgURL ? style["hide"] : ""
              }`}
            >
              <img src={addIcon} alt="add" />
              <input
                className={style["file-input"]}
                type="file"
                onChange={(e) => {
                  discardSelection();
                  onSelectHandler(e);
                }}
              />
            </label>

            <label className={style["select-another"]}>
              <div
                className={`${style["select-another"]} ${
                  hide && formData.imgFile ? "" : style["hide"]
                }`}
              >
                Select Another
              </div>

              <input
                className={style["file-input"]}
                type="file"
                onChange={(e) => {
                  discardSelection();
                  onSelectHandler(e);
                }}
              />
            </label>

            <div
              className={`${style["confirm-selection"]} ${
                hide || !formData.imgURL ? style["hide"] : ""
              }`}
            >
              <Circular className={style["check"]} onClick={confirmSelection}>
                <img src={check} alt="" />
              </Circular>
              <Circular className={style["close"]} onClick={discardSelection}>
                <img src={close} alt="" />
              </Circular>
            </div>
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
