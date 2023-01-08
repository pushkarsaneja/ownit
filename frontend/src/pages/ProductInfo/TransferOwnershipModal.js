import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import Rectangle from "../../components/Buttons/Rectangle";
import MinimalProductCard from "../../components/Card/MinimalProductCard";
import InputHandler from "../../components/InputHandler";
import Modal from "../../components/Modal";
import ErrorProducts from "./ErrorProducts";
import { getSearchUser, tranferOwnership } from "./logic";
import style from "./style.module.scss";

function TransferOwnershipModal({
  open,
  handleClose,
  setToggle,
  selectedProducts,
}) {
  const [formData, setFormData] = useState({
    searchText: null,
  });
  const [loading, setLoading] = useState({
    transfer: false,
    fetchUser: false,
  });
  const alert = useAlert();
  const [toInfo, setToInfo] = useState(undefined);
  const [selectedProductsOpen, setSelectedProductsOpen] = useState(false);
  const [errorProducts, setErrorProducts] = useState([]);

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
    tranferOwnership(formData.searchText, selectedProducts)
      .then((res) => {
        console.log(res);
        if (res.errors.length === 0) {
          alert.success("Ownership Transffered");
          handleClose();
          setToggle((pre) => !pre);
        } else {
          setErrorProducts(res.errors);
        }
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
      setErrorProducts([]);
    };
  }, [open]);

  useEffect(() => {
    console.log(selectedProductsOpen);
  }, [selectedProductsOpen]);

  return (
    <Modal open={open} handleClose={handleClose}>
      {errorProducts.length > 0 && (
        <ErrorProducts
          errorProducts={errorProducts}
          handleClose={handleClose}
          setToggle={setToggle}
        />
      )}
      {errorProducts.length === 0 && (
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

          <div
            className={style["selectedToggleWrapper"]}
            style={{
              padding: "10px",
              background: "var(--offWhite)",
              position: "relative",
              marginTop: "10px",
            }}
          >
            <p>
              Selected Products
              <span className={style["noOfSelectedProduct"]}>
                ({selectedProducts.length})
              </span>
            </p>
            <button
              className={`${style["arrow"]} ${
                selectedProductsOpen ? style["up"] : style["down"]
              }`}
              style={{}}
              onClick={() => setSelectedProductsOpen((pre) => !pre)}
            >
              👇🏻
            </button>
          </div>

          <div
            className={`${style["productsListWrapper"]} ${
              selectedProductsOpen ? style["open"] : style["close"]
            }`}
          >
            {selectedProducts.map(({ title, img, id }, idx) => (
              <MinimalProductCard key={idx} id={id} name={title} img={img} />
            ))}
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
      )}
    </Modal>
  );
}

export default TransferOwnershipModal;
