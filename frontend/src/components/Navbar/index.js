import React from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import style from "./style.module.scss";

function Navbar({ authenticated, role }) {
  return (
    <nav className={`${style["nav"]}`}>
      <div className="logo">
        <h1>OwnIt</h1>
      </div>
      <div className={`${style["linksList"]}`}>
        {authenticated ? <SignedInLinks role={role} /> : <SignedOutLinks />}
      </div>
    </nav>
  );
}

export default Navbar;
