import React, { useEffect, useRef, useState } from "react";
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
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(0);
  // 0 -> no submit
  // 1 -> login
  // 2 -> signup
  const dispatch = useDispatch();
  const formContainerRef = useRef();
  const role = formData.role;

  const onSignInHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validateSignInForm(formData));
    setSubmit(1);
    //Handle submit here
  };

  const validateSignInForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  const validateSignupForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.Sname = "Name is required!";
    }
    if (!values.email) {
      errors.Semail = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.Semail = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.Spassword = "Password is required";
    } else if (values.password.length < 4) {
      errors.Spassword = "Password must be more than 4 characters";
    }

    return errors;
  };

  const onSignUpHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validateSignupForm(formData));
    //Handle submit here
    setSubmit(2);
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

  const setUserType = (role) => {
    setFormData({ ...formData, role });
  };

  useEffect(() => {
    const auth = async () => {
      console.log(formErrors, submit);
      if (Object.keys(formErrors).length === 0 && submit === 1) {
        try {
          const { data } = await http("/api/v1/signin", "POST", formData);
          dispatch(userActions.setProfile({ authenticated: true, ...data }));
        } catch (error) {
          setFormErrors({
            general: error.response.data.message,
          });
        }
      } else if (Object.keys(formErrors).length === 0 && submit === 2) {
        try {
          const { data } = await http("/api/v1/register", "POST", formData);
          dispatch(userActions.setProfile({ authenticated: true, ...data }));
        } catch (error) {
          setFormErrors({
            Sgeneral: error.response.data.message,
          });
        }
      }
    };

    auth();
  }, [formErrors, submit]);

  if (authenticated) return <Navigate to="/profile" />;
  else
    return (
      <div className={`${style["sign-in-page"]} page`}>
        <div className={style["form-container"]} ref={formContainerRef}>
          <form className={style["sign-in-form"]}>
            <Heading>Login to OwnIt</Heading>
            <div className={style["form-fields"]}>
              <p className={style["error"]}>{formErrors.general}</p>
              <InputHandler
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
              />
              <p className={style["error"]}>{formErrors.email}</p>

              <InputHandler
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
              />
              <p className={style["error"]}>{formErrors.password}</p>
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
            <p className={style["error"]}>{formErrors.Sgeneral}</p>
            <div className={style["form-fields"]}>
              <InputHandler
                placeholder="Full name or Company name"
                type="text"
                name="name"
                value={formData.name}
                onChange={onChangeHandler}
              />
              <p className={style["error"]}>{formErrors.Sname}</p>
              <InputHandler
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
              />
              <p className={style["error"]}>{formErrors.Semail}</p>
              <InputHandler
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
              />
              <p className={style["error"]}>{formErrors.Spassword}</p>
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
