import React from "react";
import Primary from "./components/Buttons/Primary";
import OAuth from "./components/Buttons/OAuth";
import google from "./assets/icons/google.png";
import facebook from "./assets/icons/facebook.png";
import Rectangle from "./components/Buttons/Rectangle";
import Ghost from "./components/Buttons/Ghost";

const App = () => {
  return (
    <>
      <Primary
        onClick={() => {
          console.log("I am primary button.");
        }}
      >
        Login
      </Primary>
      <OAuth
        onClick={() => {
          console.log("I am OAuth login button.");
        }}
        img={google}
      >
        google
      </OAuth>
      <OAuth
        onClick={() => {
          console.log("I am OAuth login button.");
        }}
        img={facebook}
      >
        facebook
      </OAuth>
      <Rectangle
        color={"success"}
        onClick={() => {
          console.log("I am caution button.");
        }}
      >
        Login
      </Rectangle>
      <Ghost
        color="secondary"
        onClick={() => {
          console.log("I am ghost button.");
        }}
      >
        Login
      </Ghost>
    </>
  );
};

export default App;
