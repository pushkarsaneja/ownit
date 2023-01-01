import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";
import menuIcon from "../../assets/icons/hamburger.png";
import closeIcon from "../../assets/icons/closePurple.png";

const LINKS = [
  {
    id: 0,
    title: "Verify Product",
    to: "/verifyproduct",
    role: null,
  },
  {
    id: 1,
    title: "Login",
    to: "/auth",
    role: null,
  },
];

function SignedOutLinks() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <ul className={`${style["links-list"]}`}>
        {LINKS.map((link) => {
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
      </ul>
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
          {LINKS.map((link) => {
            return (
              <div>
                <li
                  className={`${style["link"]} ${
                    location.pathname === link.to ? `${style["active"]}` : ""
                  }`}
                >
                  <Link to={link.to}>{link.title}</Link>
                </li>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SignedOutLinks;
