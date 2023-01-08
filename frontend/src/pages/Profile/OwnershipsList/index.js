import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import ProductCard from "../../../components/Card/ProductCard";
import SubHeading from "../../../components/SubHeading";
import { getOwnerships } from "./logic";
import { last } from "../../../helperFunctions/last";
import style from "../style.module.scss";

const soldOn = (owners, currentUser) => {
  for (let i = owners.length - 1; i >= 0; i--) {
    if (owners[i].user.toString() === currentUser)
      return new Date(owners[i].date).toLocaleDateString();
  }
};

function OwnershipsList() {
  const alert = useAlert();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const { id } = useSelector((state) => state.user);

  useEffect(() => {
    setLoading(true);
    getOwnerships()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error in getting ownerships", err);
        alert.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {};
  }, []);

  return (
    <div>
      <SubHeading>Ownerships List</SubHeading>
      <div className={`${style["ownershipProductsWrapper"]}`}>
        {loading ? (
          <p>Loading...</p>
        ) : data && data.length === 0 ? (
          <h5>No current Ownerships</h5>
        ) : (
          <>
            {data &&
              data.map((prod, idx) => (
                <ProductCard
                  key={idx}
                  id={prod._id} //mongo id
                  name={prod.name}
                  nft={prod.nft}
                  isOwner={id.toString() === prod.currentOwner.toString()}
                  img={prod.images[0]}
                  date={
                    id.toString() === prod.currentOwner.toString()
                      ? new Date(
                          last(prod.ownerships).date
                        ).toLocaleDateString()
                      : soldOn(prod.ownerships, prod.currentOwner.toString())
                  }
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default OwnershipsList;
