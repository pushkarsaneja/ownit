import React from "react";
import AddressInfo from "./AddressInfo";
import OwnershipsList from "./OwnershipsList";
import PersonalInfo from "./PersonalInfo";
import style from "./style.module.scss";

function DistributorProfile() {
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

export default DistributorProfile;
