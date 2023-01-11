import React from "react";
import style from "./style.module.scss";
function UserNameWIthImg({ name, imgSrc }) {
  return (
    <div className={style["userField"]}>
      <span>{name}</span>
      {imgSrc && imgSrc !== "" && (
        <img src={imgSrc} alt="profilepic" width="30px" height="30px" />
      )}
    </div>
  );
}

export default UserNameWIthImg;
