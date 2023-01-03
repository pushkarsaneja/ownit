import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import Rectangle from "../../components/Buttons/Rectangle";
import InputHandler from "../../components/InputHandler";
import Modal from "../../components/Modal";
import { getSearchUser, tranferOwnership } from "./logic";
import style from "./style.module.scss";

function TransferOwnershipModal({ open, handleClose }) {
  const [formData, setFormData] = useState({
    searchText: null,
  });
  const [loading, setLoading] = useState({
    transfer: false,
    fetchUser: false,
  });
  const alert = useAlert();
  const [toInfo, setToInfo] = useState(undefined);

  const handleSearchClick = () => {
    setLoading(() => ({ ...loading, fetchUser: true }));
    getSearchUser(formData.searchText)
      .then((res) => {
        console.log(res);
        if (res.user) setToInfo(res.user);
        else setToInfo(null);
      })
      .catch((err) => {
        console.log("errorin in search user");
      })
      .finally(() => {
        setLoading(() => ({ ...loading, fetchUser: false }));
      });
  };

  const handleTransferClick = () => {
    setLoading(() => ({ ...loading, transfer: true }));
    tranferOwnership(formData.searchText)
      .then(() => {
        alert.success("Ownership Transffered");

        handleClose();
      })
      .catch((err) => {
        alert.error(err);
      })
      .finally(() => {
        setLoading(() => ({ ...loading, transfer: false }));
      });
  };

  useEffect(() => {
    return () => {
      setFormData({ searchText: null });
      setToInfo(undefined);
    };
  }, []);

  return (
    <Modal open={open} handleClose={handleClose}>
      <div className={style["transferOwnershipWrapper"]}>
        <div className={style["inputGroup"]}>
          <InputHandler
            className={style["input"]}
            placeholder="Send to (UserId or email)"
            value={formData.searchText}
            onChange={(e) => {
              setFormData({ ...formData, searchText: e.target.value });
            }}
          />
          <button className={style["searchBtn"]} onClick={handleSearchClick}>
            🔍
          </button>
        </div>

        {toInfo !== undefined && (
          <div className={style["sendToInformationWrapper"]}>
            {loading.fetchUser ? (
              <p>Loading...</p>
            ) : toInfo !== null ? (
              <>
                <div className={style["imageWrapper"]}>
                  <img src={toInfo?.profile || ""} />
                </div>
                <div className={style["infoWrapper"]}>
                  <table>
                    <tr>
                      <td className={style["label"]}> UserID:</td>
                      <td className={style["value"]}>{toInfo?._id}</td>
                    </tr>
                    <tr>
                      <td className={style["label"]}>Name :</td>
                      <td className={style["value"]}>{toInfo?.name}</td>
                    </tr>
                    <tr>
                      <td className={style["label"]}>Email :</td>
                      <td className={style["value"]}>{toInfo?.email}</td>
                    </tr>
                  </table>
                </div>
              </>
            ) : (
              <p>No such user exist</p>
            )}
          </div>
        )}

        <div className={style["actionsBtnWrapper"]}>
          {toInfo && (
            <Rectangle
              color="success"
              className={style["transferBtn"]}
              onClick={handleTransferClick}
            >
              {loading.transfer ? "Transferring..." : "Transfer"}
            </Rectangle>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default TransferOwnershipModal;
