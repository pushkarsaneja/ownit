import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { userActions } from "../../redux/userSlice";
import Ghost from "../Buttons/Ghost";
import style from "./style.module.scss";
import metaIcon from "../../assets/images/metamask.png";
import powerIcon from "../../assets/images/power.png";
import menuIcon from "../../assets/icons/hamburger.png";
import closeIcon from "../../assets/icons/closePurple.png";
import Heading from "../Heading";

const LINKS = [
  {
    id: 0,
    title: "Profile",
    role: ["consumer", "manufacturer", "distributor", "authority"],
    to: "/profile",
  },
  {
    id: 4,
    title: "Dashboard",
    role: ["authority"],
    to: "/dashboard",
  },
  {
    id: 1,
    title: "Add New Product",
    role: ["manufacturer"],
    to: "/manufacturer/define-product",
  },
  {
    id: 2,
    title: "Verify Product",
    role: ["consumer", "manufacturer", "distributor", "authority"],
    to: "/verifyproduct",
  },
  {
    id: 3,
    title: "Assets",
    role: ["consumer", "manufacturer", "distributor"],
    to: "/assets",
  },
  {
    id: 4,
    title: "Transactions",
    role: ["consumer", "manufacturer", "distributor"],
    to: "/transactions",
  },
];

function SignedInLinks({ role }) {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const [heading,setHeading] = useState("");

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
    <>
      <ul className={`${style["links-list"]}`}>
        {LINKS.map((link, idx) => {
          if (link.role.indexOf(role) >= 0)
            return (
              <li
                key={idx}
                className={`${style["link"]} ${
                  location.pathname === link.to ? `${style["active"]}` : ""
                }`}
              >
                <Link to={link.to}>{link.title}</Link>
              </li>
            );
          return null;
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
      <Heading className={style["heading"]}>{heading}</Heading>
      <button
        className={style["hamburger-menu"]}
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        <img src={showMenu ? closeIcon : menuIcon} alt="" />
      </button>
      <div
        className={`${style["menu-bar-container"]} ${
          showMenu ? "" : style["hide"]
        }`}
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        <div className={style["menu-bar"]}>
          {LINKS.map((link, idx) => {

            if(location.pathname===link.to && heading!==link.title)
            {
              setHeading(link.title);
            }
            
            if (link.role.indexOf(role) >= 0)
              return (
                <li
                  key={idx}
                  className={`${style["link"]} ${
                    location.pathname === link.to ? `${style["active"]}` : ""
                  }`}
                >
                  <Link to={link.to}>{link.title}</Link>
                </li>
              );
            return null;
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
        </div>
      </div>
    </>
  );
}

export default SignedInLinks;
