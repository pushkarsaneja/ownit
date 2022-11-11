import React, { forwardRef } from "react";
import style from "./style.module.scss";

const InputHandler = forwardRef(
  (
    {
      type = "text",
      className,
      onChange,
      placeholder = "",
      value = "",
      name = "",
    },
    ref
  ) => {
    return (
      <input
        type={type}
        name={name}
        className={`${style["input"]} ${className}`}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        ref={ref}
      />
    );
  }
);

export default InputHandler;
