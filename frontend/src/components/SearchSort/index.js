import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import searchIcon from "../../assets/icons/search.png";
import sortIcon from "../../assets/icons/sort.png";
import Circular from "../Buttons/Circular";

const SearchSort = ({ onSearch, onSort }) => {
  const [value, setValue] = useState("");
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    onSort(ascending);
  }, [ascending, onSort]);

  return (
    <div className={style["search-sort"]}>
      <div className={style["search-bar-container"]}>
        <input
          type="text"
          className={style["search-bar"]}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Circular
          className={style["search-icon"]}
          onClick={() => {
            onSearch(value);
          }}
        >
          <img src={searchIcon} alt="" />
        </Circular>
      </div>
      <Circular
        className={style["sort-icon"]}
        onClick={() => {
          setAscending((prev) => !prev);
        }}
      >
        <img src={sortIcon} alt="" />
      </Circular>
    </div>
  );
};

export default SearchSort;
