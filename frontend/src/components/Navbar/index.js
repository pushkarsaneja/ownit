import React from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import style from "./style.module.scss";
import logo from "../../assets/images/Own.png";

function Navbar({ authenticated, role }) {
  return (
    <nav className={`${style["nav"]}`}>
      <div className={style["logo"]}>
        <img src={logo} alt="logo" />
      </div>
      <div className={`${style["linksList"]}`}>
        {authenticated ? <SignedInLinks role={role} /> : <SignedOutLinks />}
      </div>
    </nav>
  );
}

export default Navbar;
