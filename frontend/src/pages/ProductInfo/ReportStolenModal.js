import React from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import Rectangle from "../../components/Buttons/Rectangle";
import Modal from "../../components/Modal";
import PhotoEditor from "../../components/PhotoEditor";
import { reportProduct } from "./logic";
import style from "./style.module.scss";

function ReportStolenModal({ open, handleClose, setToggle }) {
  const [imgData, setImgData] = useState({});
  const alert = useAlert();
  const [loading, setLoading] = useState(false);
  const handleReport = () => {
    setLoading(true);
    reportProduct(imgData.imgFile)
      .then((res) => {
        alert.success("Product Reported");
        handleClose();
        setToggle((pre) => !pre);
      })
      .catch((err) => {
        alert.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      <div className={style["reportWrapper"]}>
        {/* <p>Upload FIR copy</p> */}
        {/* <PhotoEditor
          imgData={imgData}
          setImgData={setImgData}
          width={200}
          height={200}
        /> */}
        <p>Are you sure want to report the product as stolen ? </p>
        <div className={style["actionBtnsWraper"]}>
          <Rectangle color="success" onClick={handleReport}>
            {loading ? "Reporting..." : "Report"}
          </Rectangle>
        </div>
      </div>
    </Modal>
  );
}

export default ReportStolenModal;
