import React, { useState } from "react";
import { useAlert } from "react-alert";
import Rectangle from "../../components/Buttons/Rectangle";
import Dropdown from "../../components/Dropdown";
import Modal from "../../components/Modal";
import { updateReportStatus } from "./logic";
import style from "./style.module.scss";

const OPTIONS = [
  {
    value: "reported",
    text: "Reported",
  },
  {
    value: "investigating",
    text: "Investigating",
  },
  {
    value: "closed",
    text: "Closed",
  },
];

function UpdateReportStatusModal({ open, handleClose, data, setToggle }) {
  const [val, setVal] = useState({ status: data.status, remarks: "" });
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  const handleChange = (e) => {
    setVal((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleStatusUpdate = () => {
    setLoading(true);
    updateReportStatus(data._id, data.productId._id, val.status, val.remarks)
      .then((res) => {
        alert.success(`Report Status Updated to ${val.status}`);
        handleClose();
        setToggle((pre) => !pre);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Modal handleClose={handleClose} open={open}>
      <div className={style["selectWrapper"]}>
        <Dropdown
          name="status"
          value={val.status}
          options={OPTIONS}
          handleChange={handleChange}
          className={style["dropdown"]}
        />
        <textarea
          name="remarks"
          id=""
          cols="20"
          rows="10"
          placeholder="remarks"
          onChange={handleChange}
        ></textarea>
      </div>
      <Rectangle color="success" onClick={handleStatusUpdate}>
        {loading ? "Updating ... " : "Update"}
      </Rectangle>
    </Modal>
  );
}

export default UpdateReportStatusModal;
