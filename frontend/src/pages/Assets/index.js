import React from "react";
import LotCard from "../../components/Card/LotCard";
import ProductCard from "../../components/Card/ProductCard";
import style from "./style.module.scss";
import { products } from "../../sampleData/products";
import { last } from "../../helperFunctions/last";
import TransactionCard from "../../components/Card/TransactionCard";
import SearchSort from "../../components/SearchSort";

const currentUser = "6883237943";

const soldOn = (owners) => {
  console.log(owners);
  for (let i = owners.length - 1; i >= 0; i--) {
    if (owners[i].id === currentUser) return owners[i].date;
  }
};

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

const Assets = () => {
  return (
    <div className={`${style["assets-page"]}`}>
      <SearchSort onSearch={onSearch} onSort={onSort} />
      <TransactionCard />
      <LotCard />
      <LotCard />
      <LotCard />
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

export default Assets;
