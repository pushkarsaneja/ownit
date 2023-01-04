import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import Rectangle from "../../../components/Buttons/Rectangle";
import Modal from "../../../components/Modal";
import PhotoEditor from "../../../components/PhotoEditor";
import { savePersonalInfo } from "./logic";
import style from "./style.module.scss";
import Circular from "../../../components/Buttons/Circular";
import close from "../../../assets/icons/close.png";
import imageNotFound from "../../../assets/images/imgNotFound.webp";

function EditPersonalInfoModal({ handleClose, open, data, setData }) {
  const alert = useAlert();
  const firstInputRef = useRef();
  const [imgData, setImgData] = useState("");
  const [value, setValue] = useState({
    name: data?.name || "-",
    email: data?.email || "-",
    phone: data?.phone || "-",
  });
  const [loading, setLoading] = useState(false);
  const [showPhotoEditor, setShowPhotoEditor] = useState(false);
  const [removeProfile, setRemoveProfile] = useState(false);

  const handleChange = (e) => {
    const ele = e.target.name;
    const val = e.target.value;

    setValue((pre) => ({
      ...pre,
      [ele]: val,
    }));
  };

  const handleSavePersonalInfo = async () => {
    try {
      setLoading(true);

      const newPersonalInfo = await savePersonalInfo({
        personalInfo: {
          ...value,
          profile: removeProfile ? null : imgData.imgFile,
        },
      });
      alert.success("Saved");
      setData(newPersonalInfo);
      handleClose();
      setLoading(false);
    } catch (err) {
      alert.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (firstInputRef?.current) {
      firstInputRef.current.focus();
    }
  }, []);

  return (
    <Modal handleClose={handleClose} open={open}>
      <div className={`${style["modalWrapper"]}`}>
        <h3>Personal Info</h3>
        <br />
        <div className={`${style["editWrapper"]}`}>
          <div className={`${style["left"]}`}>
            {showPhotoEditor ? (
              <PhotoEditor
                imgData={imgData}
                setImgData={setImgData}
                width={200}
                height={200}
              />
            ) : (
              <div className={`${style["imageWrapper"]}`}>
                <img
                  src={
                    removeProfile
                      ? imageNotFound
                      : data.profile
                      ? data.profile
                      : imageNotFound
                  }
                  alt=""
                  width="200px"
                  height="200px"
                />
                <div
                  className={`${style["actionBtns"]}`}
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Circular
                    className={style["editBtn"]}
                    onClick={() => setShowPhotoEditor(true)}
                  >
                    🖊️
                  </Circular>
                  <Circular
                    className={style["removeBtn"]}
                    onClick={() => setImgData("")}
                  >
                    <img
                      src={close}
                      alt=""
                      height="25px"
                      width="25px"
                      onClick={() => setRemoveProfile(true)}
                    />
                  </Circular>
                </div>
              </div>
            )}
          </div>
          <div className={`${style["right"]}`}>
            <table className={`${style["table"]}`}>
              <tr className={`${style["row"]}`}>
                <td className={`${style["key"]}`}>User ID</td>
                <td className={`${style["value"]}`}>{data._id}</td>
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
                    ref={firstInputRef}
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
          </div>
        </div>
        <Rectangle color="success" onClick={() => handleSavePersonalInfo()}>
          {loading ? "Saving ..." : "Save"}
        </Rectangle>
      </div>
    </Modal>
  );
}

export default EditPersonalInfoModal;
