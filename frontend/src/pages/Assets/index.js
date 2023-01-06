import React, { useState } from "react";
import ProductCard from "../../components/Card/ProductCard";
import style from "./style.module.scss";
import { products } from "../../sampleData/products";
import { last } from "../../helperFunctions/last";
import SearchSort from "../../components/SearchSort";
import Heading from "../../components/Heading";
import Ghost from "../../components/Buttons/Ghost";
import Primary from "../../components/Buttons/Primary";


const currentUser = "6883237943";

const soldOn = (owners) => {
  for (let i = owners.length - 1; i >= 0; i--) {
    if (owners[i].id === currentUser) return owners[i].date;
  }
};



const Assets = () => {

  const [currentlyOwned,setCurrentlyOwned] = useState(true);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
 
  
  const showAllOwned = () =>{
    setCurrentlyOwned(false);
    //handle all owned filter
  }
  
  const showCurrentlyOwned = () =>{
    setCurrentlyOwned(true);
    //handle currently owned filter
    
  }
  
  const onTransfer=()=>{
    if(selectedProducts.length>0)
    {
      console.log(selectedProducts);
      //handle Transfer
    }

    //call discardSelection after transferred successfully
  }

  const discardSelection =()=>{
    setSelectMode(prev=>!prev)
    setSelectedProducts([]);
  }
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

  return (
    <div className={`${style["assets-page"]}`}>
      <div className={style["sticky-bar"]}>
        <SearchSort onSearch={onSearch} onSort={onSort} />
        <div className={style["tool-bar"]}>
          <Ghost className={`${style["ghost"]} ${style[currentlyOwned?"":"active"]}`} onClick={showAllOwned}>All owned</Ghost>
          <Ghost className={`${style["ghost"]} ${style[currentlyOwned?"active":""]}`} onClick={showCurrentlyOwned}>Currently owned</Ghost>
          <Ghost className={`${style["ghost"]} ${style[""]}`} onClick={discardSelection}>{selectMode?"Discard Selecion":"Select Multiple"}</Ghost>
          <Primary className={`${style["primary"]} ${style[selectMode?"":"hide"]} ${style[selectedProducts.length?"active":""]}`} onClick={onTransfer}><span>Transfer Selected</span></Primary>
        </div>
      </div>
      <div className={style["products-container"]}>
      {products.map((prod,idx) => {
        return (
          <ProductCard
            id={prod.id} //mongo id
            name={prod.name}
            key={idx}
            nft={prod.nft}
            isOwner={currentUser === prod.owner}
            img={prod.img}
            date={
              currentUser === prod.owner
                ? last(prod.owners).date
                : soldOn(prod.owners)
            }
            selectMode={selectMode}
            onClick = {()=>{
              setSelectedProducts(prev=>{
                if(!selectedProducts.includes(prod.id))
                return [...prev,prod.id];
                else
                {
                  const temp=[];
                  prev.forEach((ele)=>{
                    if(ele!==prod.id)
                    {
                      temp.push(ele);
                    }
                  })

                  return temp;
                };
              })
            }}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Assets;
