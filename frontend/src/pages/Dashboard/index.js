import React from "react";
import { useNavigate } from "react-router-dom";
import Badge from "../../components/badge";
import UserNameWIthImg from "../../components/userNameWIthImg";
import useEventSource from "../../custom hooks/useEventSource";
import style from "./style.module.scss";

const COLOR = {
  closed: {
    bgColor: "var(--success)",
    textColor: "white",
  },
  investigating: {
    bgColor: "#3970c9",
    textColor: "white",
  },
  reported: {
    bgColor: "var(--caution)",
    textColor: "white",
  },
};

function Dashboard() {
  const navigate = useNavigate();
  const data = useEventSource(
    "http://localhost:5000/api/v1/report/streamReports"
  );

  const handleReportClick = (id) => {
    navigate(`/report/${id}`);
  };

  if (!data) return <p>loading</p>;
  if (data.length === 0) return <p>No Reports Yet</p>;

  return (
    <div className={style["dashboardWrapper"]}>
      <div className={style["tableContainer"]}>
        <table className={style["table"]}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Product</th>
              <th>Reported by</th>
              <th>Reporting Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => {
              return (
                <tr
                  onClick={() => handleReportClick(item._id)}
                  className={item.status === "closed" ? style["closed"] : ""}
                >
                  <td>{idx + 1}</td>
                  <td>{item.productId.title}</td>
                  <td className={style["userField"]}>
                    {/* <span>{item.reportedUser.name}</span>
                    {item.reportedUser.profile &&
                      item.reportedUser.profile !== "" && (
                        <img
                          src={item.reportedUser.profile}
                          alt="profilepic"
                          width="30px"
                          height="30px"
                        />
                      )} */}
                    <UserNameWIthImg
                      name={item.reportedUser.name}
                      imgSrc={item.reportedUser.profile}
                    />
                  </td>

                  <td>{new Date(item.reportingDate).toLocaleDateString()}</td>
                  <td>
                    <Badge
                      text={item.status}
                      textColor={COLOR[item.status].textColor}
                      bgColor={COLOR[item.status].bgColor}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
