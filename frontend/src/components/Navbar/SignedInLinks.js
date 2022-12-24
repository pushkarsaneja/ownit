import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { userActions } from "../../redux/userSlice";
import Ghost from "../Buttons/Ghost";
import style from "./style.module.scss";
import metaIcon from "../../assets/images/metamask.png";
import powerIcon from "../../assets/images/power.png";

const LINKS = [
  {
    id: 0,
    title: "Profile",
    role: null,
    to: "/",
  },
  {
    id: 4,
    title: "Dashboard",
    role: "authority",
    to: "/dashboard",
  },
  {
    id: 1,
    title: "Create Product",
    role: "manufacturer",
    to: "/manufacturer/define-product",
  },
  {
    id: 2,
    title: "Verify Product",
    role: null,
    to: "/verifyproduct",
  },
  {
    id: 3,
    title: "Assets",
    role: null,
    to: "/assets",
  },
  {
    id: 4,
    title: "Transactions",
    role: null,
    to: "/transactions",
  },
];

function SignedInLinks({ role }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(
      userActions.setProfile({
        authenticated: false,
        name: null,
        role: null,
        email: null,
      })
    );
  };
  return (
    <ul className={`${style["links-list"]}`}>
      {LINKS.map((link) => {
        if (link.role === null || link.role === role)
          return (
            <li
              className={`${style["link"]} ${
                location.pathname === link.to ? `${style["active"]}` : ""
              }`}
            >
              <Link to={link.to}>{link.title}</Link>
            </li>
          );
      })}
      <li>
        <Ghost className={style["connect-wallet"]} onClick={() => {}}>
          <div>
            <img src={metaIcon} alt="" />
            Connect Wallet
          </div>
        </Ghost>
      </li>
      <li>
        <Ghost className={style["logout-btn"]} onClick={handleLogout}>
          <div>
            <img src={powerIcon} alt="" />
            Logout
          </div>
        </Ghost>
      </li>
    </ul>
  );
}

export default SignedInLinks;
