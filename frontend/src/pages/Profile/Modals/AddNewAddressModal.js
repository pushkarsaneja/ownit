import React, { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import style from "./style.module.scss";
import { Country, State } from "country-state-city";
import { saveNewAddress } from "../logic";
import { useAlert } from "react-alert";
import Rectangle from "../../../components/Buttons/Rectangle";

function AddNewAddressModal({ handleClose, open, setData }) {
  const [address, setAddress] = useState({
    country: null,
    state: null,
    addressLine: "",
    tag: "",
    pincode: "",
  });

  const alert = useAlert();
  const handleAddressChange = (e) => {
    const ele = e.target.name;
    const val = e.target.value;
    setAddress((pre) => {
      return {
        ...pre,
        [ele]: val,
      };
    });
  };

  const handleSaveAddress = async () => {
    if (
      address.addressLine.trim() === "" ||
      !address.country ||
      !address.state
    ) {
      alert.info("Address Fields must be filled properly");
      return;
    }
    const add = {
      ...address,
      country: Country.getCountryByCode(address.country).name,
    };
    try {
      const newAddresses = await saveNewAddress({ address: add });
      alert.success("New Address Added");
      setData(newAddresses);
      handleClose();
    } catch (err) {
      alert.error(err);
    }
  };

  useEffect(() => {
    return () => {
      setAddress(() => {
        return {
          country: null,
          state: null,
          addressLine: "",
          pincode: "",
          tag: "",
        };
      });
    };
  }, []);

  return (
    <Modal handleClose={handleClose} open={open} style={{ width: "600px" }}>
      <div className={`${style["modalWrapper"]}`}>
        <h3>Enter address</h3>
        <br />
        <textarea
          onChange={handleAddressChange}
          name="addressLine"
          id={`${style["addressLine"]}`}
          cols="30"
          value={address.addressLine}
          rows="4"
          placeholder="enter house no , street , apparment"
        ></textarea>

        <div className={`${style["countryStateWrapper"]}`}>
          <select
            name="country"
            value={address.country}
            onChange={handleAddressChange}
          >
            <option value={null} disabled selected>
              Select country
            </option>
            {Country.getAllCountries().map((item) => (
              <option value={item.isoCode}>{item.name}</option>
            ))}
          </select>
          <select
            value={address.state}
            name="state"
            onChange={handleAddressChange}
          >
            <option value={null} disabled selected>
              Select State
            </option>
            {address.country &&
              State.getStatesOfCountry(address.country).map((item) => (
                <option>{item.name}</option>
              ))}
          </select>
        </div>
        <input
          type="text"
          name="pincode"
          value={address.pincode}
          className={`${style["pincode"]} ${style["input"]}`}
          placeholder="Pincode"
          onChange={handleAddressChange}
        />
        <input
          type="text"
          name="tag"
          className={`${style["tag"]} ${style["input"]}`}
          value={address.tag}
          placeholder="enter tag ( Home , work )"
          onChange={handleAddressChange}
        />
        <Rectangle color="success" onClick={handleSaveAddress}>
          Save address
        </Rectangle>
      </div>
    </Modal>
  );
}

export default AddNewAddressModal;
