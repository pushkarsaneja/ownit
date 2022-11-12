import React, { useRef, useState } from "react";
import Anchor from "../../components/Anchor";
import OAuth from "../../components/Buttons/OAuth";
import Primary from "../../components/Buttons/Primary";
import Heading from "../../components/Heading";
import InputHandler from "../../components/InputHandler";
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
import style from "./style.module.scss";
import Radio from "../../components/Radio";

const SignIn = () => {
  const [formData, setFormData] = useState({ userType: "consumer" });
  const formContainerRef = useRef();
  const userType = formData.userType;

  const onSignInHandler = (e) => {
    e.preventDefault();

    //Handle submit here

    console.log(formData);
  };

  const onSignUpHandler = (e) => {
    e.preventDefault();

    //Handle submit here

    console.log(formData);
  };

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const rotateForm = () => {
    const classList = formContainerRef.current.classList;
    if (classList.contains(style["rotate"])) {
      classList.remove(style["rotate"]);
    } else {
      classList.add(style["rotate"]);
    }
  };

  const setUserType = (userType) => {
    setFormData({ ...formData, userType });
  };

  return (
    <div className={style["sign-in-page"]}>
      <div className={style["form-container"]} ref={formContainerRef}>
        <form className={style["sign-in-form"]}>
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
          <Primary onClick={onSignInHandler}>Login</Primary>
          <div>
            New to OwnIt:{" "}
            <Anchor onClick={rotateForm} className={style["signup"]}>
              SignUp
            </Anchor>
          </div>
          <div className={style["oauth-login"]}>
            <OAuth img={google}>Google</OAuth>
            <OAuth img={facebook}>Facebook</OAuth>
          </div>
        </form>

        <form className={style["sign-up-form"]}>
          <Heading>Signup to OwnIt</Heading>
          <div className={style["form-fields"]}>
            <InputHandler
              placeholder="Full name or Company name"
              type="text"
              name="name"
              value={formData.name}
              onChange={onChangeHandler}
            />
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
          </div>
          <h2>Signup as:</h2>
          <div className={style["radio-buttons-container"]}>
            <Radio
              onClick={() => {
                setUserType("Manufacturer");
              }}
              active={userType.toLowerCase() === "manufacturer"}
            >
              Manufacturer
            </Radio>
            <Radio
              onClick={() => {
                setUserType("Distributor");
              }}
              active={userType.toLowerCase() === "distributor"}
            >
              Distributor
            </Radio>
            <Radio
              onClick={() => {
                setUserType("Consumer");
              }}
              active={userType.toLowerCase() === "consumer"}
            >
              Consumer
            </Radio>
          </div>
          <Primary onClick={onSignUpHandler}>Signup</Primary>
          <div>
            Already have an account?{" "}
            <Anchor onClick={rotateForm} className={style["signup"]}>
              SignIn
            </Anchor>
          </div>
          <div className={style["oauth-login"]}>
            <OAuth img={google}>Google</OAuth>
            <OAuth img={facebook}>Facebook</OAuth>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
