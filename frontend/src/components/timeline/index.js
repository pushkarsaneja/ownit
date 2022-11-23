import React from "react";
import style from "./style.module.scss";

const DATA = [
  {
    id: 0,
    role: 0,
    date: "12/13/14",
    description: "Samsung godown",
  },
  {
    id: 1,
    role: 1,
    date: "12/12/16",
    description: "ABC electronics",
  },
  {
    id: 2,
    role: 2,
    date: "11/15/15",
    user: {
      name: "Sher Singh",
      userId: "123456",
    },
  },
  {
    id: 3,
    role: 2,
    date: "14/15/15",
    user: {
      name: "Pushkar Saneja",
      userId: 12344323,
    },
  },
];

function TimeLine() {
  return (
    <div className={style["timeline"]}>
      {DATA.map((item, idx) => {
        return (
          <div className={style["container"]}>
            <div className={style["logo"]}></div>
            <div className={style["textbox"]}>
              <header>
                <span className="title">
                  {item.role === 0
                    ? "Product Manufactured"
                    : item.role === 1
                    ? "Product Distributor"
                    : "Product Sold"}
                </span>
                <span className={style["date"]}>{item.date}</span>
              </header>
              {(item.role === 0 || item.role === 1) && (
                <p>{item.description}</p>
              )}
              {item.role === 2 && (
                <div className={style["ownerDetails"]}>
                  <div className={style["transDetails"]}>
                    <div className={style["left"]}>
                      <label className={style["label"]}>Buyer Name </label>
                      <label className={style["label"]}>Id </label>
                    </div>
                    <div className={style["right"]}>
                      <p className={style["value"]}>{item.user.name}</p>
                      <p className={style["value"]}>{item.user.userId}</p>
                    </div>
                  </div>
                </div>
              )}
              <span className={style["arrow"]}></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TimeLine;
