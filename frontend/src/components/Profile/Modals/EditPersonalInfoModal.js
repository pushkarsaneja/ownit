import React from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import Rectangle from "../../Buttons/Rectangle";
import Modal from "../../Modal";
import { savePersonalInfo } from "./logic";
import style from "./style.module.scss";

function EditPersonalInfoModal({ handleClose, open, data, setData }) {
  const alert = useAlert();
  const [value, setValue] = useState({
    name: data?.name || "-",
    email: data?.email || "-",
    phone: data?.phone || "-",
  });

  const handleChange = (e) => {
    const ele = e.target.name;
    const val = e.target.value;
    console.log(ele, val);
    setValue((pre) => ({
      ...pre,
      [ele]: val,
    }));
  };

  const handleSavePersonalInfo = async () => {
    try {
      const newPersonalInfo = await savePersonalInfo({ personalInfo: value });
      alert.success("Saved");
      setData(newPersonalInfo);
      handleClose();
    } catch (err) {
      alert.error(err);
    }
  };

  return (
    <Modal handleClose={handleClose} open={open} style={{ width: "600px" }}>
      <div className={`${style["modalWrapper"]}`}>
        <h3>Personal Info</h3>
        <br />
        <table className={`${style["table"]}`}>
          <tr className={`${style["row"]}`}>
            <td className={`${style["key"]}`}>User ID</td>
            <td className={`${style["value"]}`}>123213</td>
          </tr>
          <tr>
            <td className={`${style["key"]}`}>Name</td>
            <td>
              <input
                className={`${style["input"]}`}
                type="text"
                value={value.name}
                name="name"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className={`${style["key"]}`}>Email</td>
            <td>
              <input
                className={`${style["input"]}`}
                type="text"
                value={value.email}
                name="email"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className={`${style["key"]}`}>Phone</td>
            <td>
              <input
                className={`${style["input"]}`}
                type="text"
                value={value.phone}
                name="phone"
                onChange={handleChange}
              />
            </td>
          </tr>
        </table>
        <Rectangle color="success" onClick={() => handleSavePersonalInfo()}>
          Save
        </Rectangle>
      </div>
    </Modal>
  );
}

export default EditPersonalInfoModal;
