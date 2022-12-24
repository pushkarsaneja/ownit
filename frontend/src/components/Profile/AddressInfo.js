import React, { useEffect, useState } from "react";
import AddNewAddressModal from "./Modals/AddNewAddressModal";
import { useAlert } from "react-alert";
import style from "./style.module.scss";
import { deleteAddress, getAddressInfo } from "./logic";
import Circular from "../Buttons/Circular";
import Ghost from "../Buttons/Ghost";

function AddressInfo() {
  const alert = useAlert();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddressDelete = (id) => {
    deleteAddress({ id: id })
      .then((res) => {
        setData(res);
        alert.success("Deleted Successfully ");
      })
      .catch((err) => {
        console.log(err.response);
        alert.error(err);
      });
  };

  useEffect(() => {
    getAddressInfo()
      .then((addresses) => {
        // console.log(user);
        setData(addresses);
      })
      .catch((err) => {
        console.log("error in getting personal Info");
        alert.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(data);
  return (
    <div className={`${style["addressInfoWrapper"]}`}>
      {loading ? (
        <h3>Loading ...</h3>
      ) : (
        <>
          {open && (
            <AddNewAddressModal
              open={open}
              handleClose={handleClose}
              setData={setData}
            />
          )}

          <div className={`${style["content"]}`}>
            <p
              className={`${style["createNewAddressBtn"]}`}
              onClick={() => setOpen(true)}
            >
              Add New Address
            </p>
            <ul className={`${style["addressList"]}`}>
              {data &&
                data.map(
                  ({ tag, addressLine, state, country, pincode, _id }) => {
                    return (
                      <li className={`${style["address"]}`} key={_id}>
                        <Circular
                          color="danger"
                          className={`${style["deleteBtn"]}`}
                          onClick={() => handleAddressDelete(_id)}
                        >
                          🗑️
                        </Circular>
                        <p className={`${style["tag"]}`}>{tag || ""}</p>
                        <p className={`${style["addressLine"]}`}>
                          {addressLine || ""}
                        </p>
                        <div
                          className={`${style["addressStateCountryWrapper"]}`}
                        >
                          <p className={`${style["state"]}`}>{state || ""}</p>
                          <p className={`${style["country"]}`}>
                            {country || ""}
                          </p>
                        </div>
                        <p className={`${style["pincode"]}`}>{pincode || ""}</p>
                      </li>
                    );
                  }
                )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default AddressInfo;
