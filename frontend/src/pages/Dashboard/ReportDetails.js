import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Rectangle from "../../components/Buttons/Rectangle";
import { getReportData } from "./logic";
import style from "./style.module.scss";
import UpdateReportStatusModal from "./UpdateReportStatusModal";

function ReportDetails() {
  const { reportId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReportData(reportId)
      .then((res) => {
        console.log(res);
        setData(res.report);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      setData(null);
    };
  }, [toggle]);

  if (loading) {
    return <h3>Loading ...</h3>;
  }
  if (data)
    return (
      <div className={style["reportContainer"]}>
        <div className={style["left"]}>
          <img
            src={data.productId.images[0]}
            alt=""
            width="300px"
            height="300px"
            className={style["productImage"]}
          />
        </div>

        <div className={style["right"]}>
          <div className={style["reportInfo"]} style={{}}>
            <h4 className={style["heading"]}> Report Details</h4>
            <table>
              <tbody>
                <tr>
                  <td className={style["key"]}>Report ID</td>
                  <td className={style["value"]}>{data._id}</td>
                </tr>
                <tr>
                  <td className={style["key"]}>Product</td>
                  <td className={style["value"]}>{data.productId.title}</td>
                </tr>
                <tr>
                  <td className={style["key"]}>Product Id</td>
                  <td className={style["value"]}>{data.productId._id}</td>
                </tr>

                <tr>
                  <td className={style["key"]}>Report Date</td>
                  <td className={style["value"]}>
                    {new Date(data.reportingDate).toLocaleDateString()}
                  </td>
                </tr>
                <tr>
                  <td className={style["key"]}>Reported User</td>
                  <td className={style["value"]}>{data.reportedUser.name}</td>
                </tr>
                <tr>
                  <td className={style["key"]}>Report Status</td>
                  <td className={style["value"]}>{data.status}</td>
                </tr>
                {data.status.toString().toLowerCase() === "closed" && (
                  <>
                    <tr>
                      <td className={style["key"]}>Resolved User</td>
                      <td className={style["value"]}>
                        {data.resolvedUser.name}
                      </td>
                    </tr>
                    <tr>
                      <td className={style["key"]}>Resolved Date</td>
                      <td className={style["value"]}>
                        {new Date(data.resolvedDate).toLocaleDateString()}
                      </td>
                    </tr>
                  </>
                )}

                {data.remarks && (
                  <tr>
                    <td className={style["key"]}>Remarks</td>
                    <td className={style["value"]}>{data.remarks}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {data.status.toString().toLowerCase() !== "closed" && (
            <div className="actions">
              <Rectangle color="success" onClick={() => setOpen(true)}>
                Edit Report Status
              </Rectangle>
            </div>
          )}
        </div>

        <UpdateReportStatusModal
          handleClose={() => setOpen(false)}
          open={open}
          data={data}
          setToggle={setToggle}
        />
      </div>
    );
}

export default ReportDetails;

/**
 *
 * profile photo edit
 * searching in transactions and products sorting
 * amount in transfer
 * authority wala page
 */
