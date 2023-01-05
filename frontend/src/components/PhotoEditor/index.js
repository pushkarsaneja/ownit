import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import AvatarEditor from "react-avatar-editor";
import { useState } from "react";
import addIcon from "../../assets/icons/plus.png";
import Circular from "../../components/Buttons/Circular";
import check from "../../assets/icons/check.png";
import close from "../../assets/icons/close.png";

//imgData is a state passed as prop
//setImgData is a setState function passed as prop
//intitialize imgData to an empty object in the parent component

const PhotoEditor = ({
  imgData,
  setImgData,
  className,
  height = 300,
  width = 300,
}) => {
  useEffect(() => {
    setImgData({
      imgURL: null,
      imgFile: null,
    });
  }, [setImgData]);

  console.log(imgData);

  const [zoom, setZoom] = useState(1);

  const [hide, setHide] = useState(true);

  const canvasRef = useRef();

  const onSelectHandler = (e) => {
    setHide(false);
    setImgData({
      ...imgData,
      imgURL: URL.createObjectURL(e.target.files[0]),
    });
  };

  const confirmSelection = () => {
    setHide(true);
    canvasRef.current.getImageScaledToCanvas().toBlob((blob) => {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        setImgData({ ...imgData, imgFile: reader.result });
      };
    });
  };

  const discardSelection = () => {
    setHide(true);
    setImgData({ ...imgData, imgFile: null, imgURL: null });
  };

  return (
    <div className={`${style["image-editor-container"]} ${className}`}>
      <div className={style["image-editor"]}>
        <Circular
          className={`${style["remove-photo"]} ${
            hide && imgData.imgFile ? "" : style["hide"]
          }`}
          onClick={discardSelection}
        >
          <img src={close} alt="" />
        </Circular>
        <AvatarEditor
          ref={canvasRef}
          className={style["product-image"]}
          border={0}
          image={imgData.imgURL}
          scale={zoom}
          height={height}
          width={width}
          onChange={() => {
            console.log("Hello");
          }}
        />

        <label
          className={`${style["add-image-icon"]} ${
            imgData.imgURL ? style["hide"] : ""
          }`}
        >
          <img src={addIcon} alt="add" />
          <input
            className={style["file-input"]}
            type="file"
            onClick={(e) => {
              e.target.value = "";
            }}
            onChange={(e) => {
              discardSelection();
              onSelectHandler(e);
            }}
          />
        </label>

        <label className={style["select-another"]}>
          <div
            className={`${style["select-another"]} ${
              hide && imgData.imgFile ? "" : style["hide"]
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
            hide || !imgData.imgURL ? style["hide"] : ""
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
  );
};

export default PhotoEditor;
