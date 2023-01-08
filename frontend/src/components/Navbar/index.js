import React from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import style from "./style.module.scss";
import logo from "../../assets/images/Own.png";
import logoMini from "../../assets/images/Own-mini.png";
import { useNavigate } from "react-router-dom";

function Navbar({ authenticated, role }) {
  const navigate = useNavigate();

  return (
    <nav className={`${style["nav"]}`}>
      <div
        className={style["logo"]}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} className={style["logo-big"]} alt="logo" />
        <img src={logoMini} className={style["logo-mini"]} alt="logo" />
      </div>
      <div className={`${style["linksList"]}`}>
        {authenticated ? <SignedInLinks role={role} /> : <SignedOutLinks />}
      </div>
    </nav>
  );
}

export default Navbar;
