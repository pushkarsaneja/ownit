import React, { useState } from "react";
import PhotoEditor from "../../components/PhotoEditor";
import style from "./style.module.scss";

const Test = () => {
  const [imgData, setImgData] = useState({});

  return (
    <PhotoEditor
      imgData={imgData}
      setImgData={setImgData}
      height={200}
      width={200}
      className={style["photo-editor"]}
    />
  );
};

export default Test;
