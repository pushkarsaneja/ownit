import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { userActions } from "../../redux/userSlice";
import style from "./style.module.scss";

const LINKS = [
  {
    id: 0,
    title: "Home",
    role: null,
    to: "/",
  },
  {
    id: 1,
    title: "Create Product",
    role: "manufacturer",
    to: "/manufacturer/define-product",
  },
  {
    id: 2,
    title: "Profile",
    role: null,
    to: "/profile",
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
    <ul className={`${style["ul"]}`}>
      {LINKS.map((link) => {
        if (link.role === null || link.role === role)
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

      <li>
        <button className={`${style["logoutBtn"]}`} onClick={handleLogout}>
          Logout
        </button>
      </li>
    </ul>
  );
}

export default SignedInLinks;
