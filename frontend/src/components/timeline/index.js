import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getOwnershipData } from "./logic";
import style from "./style.module.scss";

// const DATA = [
//   {
//     user: {
//       _id: "637d32bab71f2409811a03ee",
//       name: "sher",
//       role: "manufacturer",
//     },
//     date: "2022-12-23T11:11:22.219Z",
//   },
//   {
//     user: {
//       _id: "636d0a0f9749378ec33ed6e9",
//       name: "Paras Rawa",
//       role: "consumer",
//     },
//     date: "2022-12-23T10:58:12.860Z",
//     _id: "63a589c412f4aa6531cb161c",
//   },
//   {
//     user: {
//       _id: "6371142ed63ca809069902d3",
//       name: "Pushkar Saneja",
//       role: "distributor",
//     },
//     date: "2022-12-23T11:11:22.219Z",
//     _id: "63a58cdaa883408dfe9f8767",
//   },
// ];
function TimeLine() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [DATA, setDATA] = useState([]);
  useEffect(() => {
    getOwnershipData(params.refId)
      .then((res) => {
        setDATA(res[0].ownerships);
        return;
      })
      .then(() => {
        setLoading(false);
      });
  }, [params.refId]);

  if (loading) return <h3>Loading...</h3>;
  return (
    <div className={style["timeline"]}>
      {DATA.map((item, idx) => {
        return (
          <div className={style["container"]}>
            <div className={style["logo"]}></div>
            <div className={style["textbox"]}>
              <header>
                <span className="title">
                  {item.user.role === "manufacturer"
                    ? "Product Manufactured"
                    : item.user.role === "distributor"
                    ? "Product Distributor"
                    : "Product Sold"}
                </span>
                <span className={style["date"]}>
                  {new Date(item.date).toLocaleDateString()}
                </span>
              </header>
              {(item.user.role === "manufacturer" ||
                item.user.role === "distributor") && <p>{item.user.name}</p>}
              {item.user.role === "consumer" && (
                <div className={style["ownerDetails"]}>
                  <div className={style["transDetails"]}>
                    <div className={style["left"]}>
                      <label className={style["label"]}>Buyer Name </label>
                      <label className={style["label"]}>Id </label>
                    </div>
                    <div className={style["right"]}>
                      <p className={style["value"]}>{item.user.name}</p>
                      <p className={style["value"]}>{item.user._id}</p>
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
