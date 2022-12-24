import React from "react";
import OwnershipsList from "../OwnershipsList";
import AddressInfo from "./AddressInfo";
import PersonalInfo from "./PersonalInfo";
import style from "./style.module.scss";

function ConsumerProfile() {
  return (
    <div className={`${style["profileWrapper"]}`}>
      <section className={`${style["top"]}`}>
        <PersonalInfo />
        <AddressInfo />
      </section>
      <section className={`${style["bottom"]}`}>
        <OwnershipsList />
      </section>
    </div>
  );
}

export default ConsumerProfile;
