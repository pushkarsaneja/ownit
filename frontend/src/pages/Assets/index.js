import React, { useState } from "react";
import ProductCard from "../../components/Card/ProductCard";
import style from "./style.module.scss";
import { products } from "../../sampleData/products";
import { last } from "../../helperFunctions/last";
import SearchSort from "../../components/SearchSort";
import Heading from "../../components/Heading";
import Ghost from "../../components/Buttons/Ghost";
import Primary from "../../components/Buttons/Primary";
import { useEffect } from "react";
import { getAssests } from "./logic";
import { useSelector } from "react-redux";
import TransferOwnershipModal from "../ProductInfo/TransferOwnershipModal";
import Loading from "../../components/Loading";
// const currentUser = "6883237943";

const soldOn = (owners, currentUser) => {
  for (let i = owners.length - 1; i >= 0; i--) {
    if (owners[i].user.toString() === currentUser)
      return new Date(owners[i].date).toLocaleDateString();
  }
};

const Assets = () => {
  const { id } = useSelector((state) => state.user);
  const [currentlyOwned, setCurrentlyOwned] = useState(true);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(true);

  const showAllOwned = () => {
    setCurrentlyOwned(false);
    //handle all owned filter
  };

  const showCurrentlyOwned = () => {
    setCurrentlyOwned(true);
    //handle currently owned filter
  };

  const onTransfer = () => {
    console.log(selectedProducts);
    if (selectedProducts.length > 0) {
      console.log(selectedProducts);
      //handle Transfer
      setOpen(true);
    }

    //call discardSelection after transferred successfully
  };

  const discardSelection = () => {
    setSelectMode((prev) => !prev);
    setSelectedProducts([]);
  };
  const onSort = (ascending) => {
    if (ascending) {
      //handle ascending
      // console.log("sort in ascending");
      setSort("asc");
    } else {
      //handle descending
      // console.log("Sort in descending");
      setSort("desc");
    }
  };

  const onSearch = (value) => {
    //handle search
    // console.log("Value:", value);
    setSearch(value);
  };

  useEffect(() => {
    setLoading(true);
    getAssests(currentlyOwned, sort, search)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }, [currentlyOwned, search, sort, toggle]);

  useEffect(() => {
    setSelectedProducts([]);
    setSelectMode(false);
  }, [toggle]);

  return (
    <div className={`${style["assets-page"]}`}>
      <TransferOwnershipModal
        open={open}
        handleClose={() => setOpen(false)}
        setToggle={setToggle}
        selectedProducts={selectedProducts}
      />
      <div className={style["sticky-bar"]}>
        <SearchSort onSearch={onSearch} onSort={onSort} />
        <div className={style["tool-bar"]}>
          <Ghost
            className={`${style["ghost"]} ${
              style[currentlyOwned ? "" : "active"]
            }`}
            onClick={showAllOwned}
          >
            All owned
          </Ghost>
          <Ghost
            className={`${style["ghost"]} ${
              style[currentlyOwned ? "active" : ""]
            }`}
            onClick={showCurrentlyOwned}
          >
            Currently owned
          </Ghost>
          <Ghost
            className={`${style["ghost"]} ${style[""]}`}
            onClick={discardSelection}
          >
            {selectMode ? "Discard Selecion" : "Select Multiple"}
          </Ghost>
          <Primary
            className={`${style["primary"]} ${
              style[selectMode ? "" : "hide"]
            } ${style[selectedProducts.length ? "active" : ""]}`}
            onClick={onTransfer}
          >
            <span>Transfer Selected</span>
          </Primary>
        </div>
      </div>

      {loading && (
        <Loading width={"50px"} height="50px" message={"Assests Loading"} />
      )}
      {!loading && data && data.length === 0 && <p>No Assests</p>}
      {!loading && data && (
        <div className={style["products-container"]}>
          {data.map((prod, idx) => {
            return (
              <ProductCard
                id={prod._id} //mongo id
                name={prod.title}
                key={idx}
                nft={prod.nft || "-"}
                isOwner={id.toString() === prod.currentOwner.toString()}
                img={prod.images[0]}
                date={
                  id.toString() === prod.currentOwner.toString()
                    ? new Date(last(prod.ownerships).date).toLocaleDateString()
                    : soldOn(prod.ownerships, prod.currentOwner.toString())
                }
                selectMode={selectMode}
                onClick={() => {
                  setSelectedProducts((prev) => {
                    if (!selectedProducts.includes(prod._id))
                      return [
                        ...prev,
                        {
                          id: prod._id,
                          title: prod.title,
                          img: prod.images[0],
                        },
                      ];
                    else {
                      const temp = [];
                      prev.forEach((ele) => {
                        if (ele.id !== prod._id) {
                          temp.push(ele);
                        }
                      });

                      return temp;
                    }
                  });
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Assets;
