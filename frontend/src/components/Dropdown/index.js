import React from "react";
import style from "./style.module.scss";

function Dropdown({ name, value, handleChange, options, className }) {
  return (
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className={`${style["select"]} ${className}`}
    >
      {options.map((item) => (
        <option value={item.value}>{item.text ? item.text : item.value}</option>
      ))}
    </select>
  );
}

export default Dropdown;
