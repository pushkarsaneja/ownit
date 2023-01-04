import React from "react";
import Heading from "../../components/Heading";
import SearchSort from "../../components/SearchSort";
import style from "./style.module.scss";
import { products } from "../../sampleData/products";
import ProductCard from "../../components/Card/ProductCard";
import { last } from "../../helperFunctions/last";
import Rectangle from "../../components/Buttons/Rectangle";
import Primary from "../../components/Buttons/Primary";

const currentUser = "6883237943";

const Lot = () => {
  const onSort = (ascending) => {
    if (ascending) {
      //handle ascending
      console.log("sort in ascending");
    } else {
      //handle descending
      console.log("Sort in descending");
    }
  };

  const onSearch = (value) => {
    //handle search

    console.log("Value:", value);
  };

  const soldOn = (owners) => {
    console.log(owners);
    for (let i = owners.length - 1; i >= 0; i--) {
      if (owners[i].id === currentUser) return owners[i].date;
    }
  };

  return (
    <div className={`page ${style["lot"]}`}>
      <div className={style["sticky-bar"]}>
        <div className={style["heading-container"]}>
          <Heading>Lot</Heading>
          <Primary className={style["transfer-btn"]}>Transfer Lot</Primary>
        </div>
        <div className={style["lot-id"]}>
          Lot Id : <span className={style["id"]}>63a72b839a7d38d7b41551e0</span>
        </div>
        <SearchSort onSearch={onSearch} onSort={onSort} />
      </div>
      {products.map((prod) => {
        return (
          <ProductCard
            id={prod.id} //mongo id
            name={prod.name}
            nft={prod.nft}
            isOwner={currentUser === prod.owner}
            img={prod.img}
            date={
              currentUser === prod.owner
                ? last(prod.owners).date
                : soldOn(prod.owners)
            }
          />
        );
      })}
      {products.map((prod) => {
        return (
          <ProductCard
            id={prod.id} //mongo id
            name={prod.name}
            nft={prod.nft}
            isOwner={currentUser === prod.owner}
            img={prod.img}
            date={
              currentUser === prod.owner
                ? last(prod.owners).date
                : soldOn(prod.owners)
            }
          />
        );
      })}
    </div>
  );
};

export default Lot;
