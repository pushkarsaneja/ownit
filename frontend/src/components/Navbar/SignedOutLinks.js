import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";

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
  return (
    <ul className={`${style["ul"]}`}>
      {LINKS.map((link) => {
        return (
          <li
            className={`${style["li"]} ${
              location.pathname === link.to ? `${style["active"]}` : ""
            }`}
          >
            <Link to={link.to}>{link.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SignedOutLinks;
