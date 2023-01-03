import React from "react";
import { useNavigate } from "react-router-dom";
import useEventSource from "../../custom hooks/useEventSource";
import style from "./style.module.scss";

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
          {data.map((item) => {
            return (
              <tr onClick={() => handleReportClick(item._id)}>
                <td>1</td>
                <td>{item.productId.title}</td>
                <td>{item.reportedUser.name}</td>
                <td>{new Date(item.reportingDate).toLocaleDateString()}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
