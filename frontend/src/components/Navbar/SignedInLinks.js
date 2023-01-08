import React, { useState,useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { userActions } from "../../redux/userSlice";
import Ghost from "../Buttons/Ghost";
import style from "./style.module.scss";
import metaIcon from "../../assets/images/metamask.png";
import powerIcon from "../../assets/images/power.png";
import menuIcon from "../../assets/icons/hamburger.png";
import closeIcon from "../../assets/icons/closePurple.png";

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
    title: "Create Product",
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

  const [connected, toggleConnect] = useState(false);
const location = useLocation();
const [currAddress, updateAddress] = useState('0x');

async function getAddress() {
  const ethers = require("ethers");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const addr = await signer.getAddress();
  updateAddress(addr);
}


async function connectWebsite() {

  const chainId = await window.ethereum.request({ method: 'eth_chainId' });
  if(chainId !== '0x5')
  {
    //alert('Incorrect network! Switch your metamask network to Rinkeby');
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x5' }],
   })
  }  
  await window.ethereum.request({ method: 'eth_requestAccounts' })
    .then(() => {
      // updateButton();
      console.log("here");
      getAddress();
      window.location.replace(location.pathname)
    });
}

useEffect(() => {
  window.ethereum.request({method: 'eth_accounts'}).then(
    (account)=>{
      if(account.length!=0){
        toggleConnect(true);
        getAddress();
      } 
    }
  ).catch((error)=>{
    console.log(error);
  })

  window.ethereum.on('accountsChanged', function(accounts){
    window.location.replace(location.pathname)
  })
});



  const [showMenu, setShowMenu] = useState(false);
  // const location = useLocation();
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
          <Ghost className={style["connect-wallet"]} onClick={() => {if(!connected){connectWebsite()}}}>
            <div>
              <img src={metaIcon} alt="" />
              {connected?"Connected":"Connect wallet"}
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
            <Ghost className={style["connect-wallet"]} onClick={() => {connectWebsite()}}>
              <div>
                <img src={metaIcon} alt="" />
                {connected?"Connected":"Connect wallet"}
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
