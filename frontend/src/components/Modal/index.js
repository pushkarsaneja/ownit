import React from "react";
import Circular from "../Buttons/Circular";
import extStyle from "./style.module.scss";
import close from "../../assets/icons/close.png";
function Modal({ handleClose, open, style, children }) {
  return (
    <div
      className={`${extStyle["modal"]} ${
        open ? `${extStyle["openModal"]}` : `${extStyle["closeModal"]}`
      }`}
    >
      <section className={`${extStyle["modalMain"]}`} style={{ ...style }}>
        {children}
        <Circular
          className={`${extStyle["closeBtn"]}`}
          onClick={() => handleClose()}
        >
          X
        </Circular>
      </section>
    </div>
  );
}

export default Modal;
