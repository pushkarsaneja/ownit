import React, { useState } from "react";
import Anchor from "../../components/Anchor";
import OAuth from "../../components/Buttons/OAuth";
import Primary from "../../components/Buttons/Primary";
import Heading from "../../components/Heading";
import InputHandler from "../../components/InputHandler";
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
import style from "./style.module.scss";
import http from "../../lib/http";

const SignIn = () => {
  const [formData, setFormData] = useState({});

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //Handle submit here
    const data = await http("/api/v1/signin", "POST", formData);
    console.log(data);
  };

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={style["sign-in-page"]}>
      <form className={style["form"]}>
        <Heading>Login to OwnIt</Heading>
        <div className={style["form-fields"]}>
          <InputHandler
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
          />
          <InputHandler
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
          />
          <Anchor onClick={() => {}}>Forgot Password?</Anchor>
        </div>
        <Primary onClick={onSubmitHandler}>Login</Primary>
        <div>
          New to OwnIt:{" "}
          <Anchor onClick={() => {}} className={style["signup"]}>
            SignUp
          </Anchor>
        </div>
        <div className={style["oauth-login"]}>
          <OAuth img={google}>Google</OAuth>
          <OAuth img={facebook}>Facebook</OAuth>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
