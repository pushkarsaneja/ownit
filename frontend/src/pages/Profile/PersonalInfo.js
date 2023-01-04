import React, { useEffect, useState } from "react";
import { getPersonalInfo } from "./logic";
import EditPersonalInfoModal from "./Modals/EditPersonalInfoModal";
import { useAlert } from "react-alert";
import style from "./style.module.scss";
import SubHeading from "../../components/SubHeading/index";
import imageNotFound from "../../assets/images/imgNotFound.webp";

function PersonalInfo() {
  const alert = useAlert();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getPersonalInfo()
      .then((user) => {
        setData(user);
      })
      .catch((err) => {
        console.log("error in getting personal Info");
        alert.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={`${style["personalInfoWrapper"]}`}>
      {loading ? (
        <h3>Loading ...</h3>
      ) : (
        <>
          {open && (
            <EditPersonalInfoModal
              open={open}
              handleClose={handleClose}
              data={data}
              setData={setData}
            />
          )}
          <div className={`${style["header"]}`}>
            <SubHeading>Personal Information</SubHeading>
            <p className={`${style["edit"]}`} onClick={() => setOpen(true)}>
              Edit
            </p>
          </div>
          <div className={`${style["content"]}`}>
            <div className={`${style["left"]}`}>
              <div className={`${style["imageWrapper"]}`}>
                <img
                  src={data?.profile || imageNotFound}
                  alt="Profile_Pic"
                  className={`${style["image"]}`}
                  width="200px"
                  height="200px"
                />
              </div>
              <p>{data?.name || "-"}</p>
            </div>
            <div className={`${style["right"]}`}>
              <table className={`${style["table"]}`}>
                <tr className={`${style["row"]}`}>
                  <td className={`${style["key"]}`}>User ID</td>
                  <td className={`${style["value"]}`}>{data?._id || "-"}</td>
                </tr>
                <tr>
                  <td className={`${style["key"]}`}>Name</td>
                  <td>{data?.name || "-"}</td>
                </tr>
                <tr>
                  <td className={`${style["key"]}`}>Email</td>
                  <td>{data?.email || "-"}</td>
                </tr>
                <tr>
                  <td className={`${style["key"]}`}>Phone</td>
                  <td>{data?.phone || "-"}</td>
                </tr>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PersonalInfo;
