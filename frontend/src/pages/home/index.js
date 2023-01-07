import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userActions } from "../../redux/userSlice";
function Home() {
  const navigate = useNavigate();
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

  const[connected,toggleConnect] = useState(false);
  const [currAddress,updateAddress] = useState('0x');
  const location = useLocation();

  async function getAddress(){
    const ethers = require("ethers");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    updateAddress(addr);
  }

  function updateButton(){
    const ethereumButton = document.querySelector('.enableEthereumButton');
    ethereumButton.textContent = "Connected";
  }

  async function connectWebsite(){
    const chainId = await window.ethereum.request({method:'eth_chainId'});
    if(chainId!=='0x5'){
      await window.ethereum.request({
        method:'wallet_switchEthereumChain',
        params:[{chainId:'0x5'}],
      })
    }
    await window.ethereum.request({method:'eth_requestAccounts'})
    .then(()=>{
      updateButton();
      console.log("here");
      getAddress();
      window.location.replace(location.pathname)
    });
  }

  useEffect(()=>{
    console.log(window.ethereum);
    let val = window.ethereum.isConnected();
    if(val){
      console.log("is it because of this?",val);
      getAddress();
      toggleConnect(val);
      updateButton();

    }
    window.ethereum.on('accountChanged',function(accounts){
      window.location.replace(location.pathname);
    })
  })

  return (
    <div>
      <h1>YOu can only seee this is signed in</h1>
      <button onClick={() => navigate("/distributor")}>Distributor Link</button>
      <button onClick={() => navigate("/manufacturer")}>
        Manufacturer Link
      </button>
      <button onClick={handleLogout}>Logout</button>
      <br />
      <button onClick={() => navigate("/manufacturer/define-product")}>
        Create Product
      </button>
      <button onClick={()=>connectWebsite()} className="enableEthereumButton">Connect Wallet</button>
    </div>
  );
}

export default Home;
