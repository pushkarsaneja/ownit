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
import http from "../../lib/http";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/userSlice";
import { Navigate } from "react-router-dom";

const SignIn = ({ authenticated }) => {
  const [formData, setFormData] = useState({ role: "consumer" });
  const dispatch = useDispatch();
  const formContainerRef = useRef();
  const role = formData.role;

  const onSignInHandler = async (e) => {
    e.preventDefault();

    //Handle submit here
    try {
      const { data } = await http("/api/v1/signin", "POST", formData);
      dispatch(userActions.setProfile({ authenticated: true, ...data }));
    } catch (error) {
      console.log("error in signin : ", error);
    }
  };

  const onSignUpHandler = async (e) => {
    e.preventDefault();
    //Handle submit here
    try {
      const { data } = await http("/api/v1/register", "POST", formData);
      dispatch(userActions.setProfile({ authenticated: true, ...data }));
    } catch (error) {
      console.log("error in signup : ", error);
    }
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

  const setUserType = (role) => {
    setFormData({ ...formData, role });
  };

  if (authenticated) return <Navigate to="/profile" />;
  else
    return (
      <div className={`${style["sign-in-page"]} page`}>
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
                  setUserType("manufacturer");
                }}
                active={role.toLowerCase() === "manufacturer"}
              >
                Manufacturer
              </Radio>
              <Radio
                onClick={() => {
                  setUserType("distributor");
                }}
                active={role.toLowerCase() === "distributor"}
              >
                Distributor
              </Radio>
              <Radio
                onClick={() => {
                  setUserType("consumer");
                }}
                active={role.toLowerCase() === "consumer"}
              >
                Consumer
              </Radio>
              <Radio
                onClick={() => {
                  setUserType("authority");
                }}
                active={role.toLowerCase() === "authority"}
              >
                Authority
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
