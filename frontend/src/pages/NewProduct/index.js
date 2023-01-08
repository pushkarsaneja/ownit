import React, { useState } from "react";
import style from "./style.module.scss";
import addIconWhite from "../../assets/icons/plusWhite.png";
import InputHandler from "../../components/InputHandler";
import Primary from "../../components/Buttons/Primary";
import http from "../../lib/http";
import PhotoEditor from "../../components/PhotoEditor";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { uploadFileToIPFS,uploadJSONToIPFS } from "../Pinata/Pinata";
import {ethers} from "ethers";

import OwnerNFT from '../../OwnerNFT.json';

const NewProduct = () => {
  const alert = useAlert();
  const [formData, setFormData] = useState({
    categories: [""],
  });
  const[fileURL,setFileURL] = useState(null);
  const navigate = useNavigate();
  const [imgData, setImgData] = useState({});

  let nft;

  console.log(formData);

  const onsubmitHandler = async () => {
    //Handle Submit Here
    try {
      
      for(let i=0;i<formData.qty;i++){
        await listNFT(i);
        const data = await http("/api/v1/add-product", "POST", {
          title: formData.productName,
          price: formData.MRP,
          categories: formData.categories,
          description: formData.description,
          images: [imgData.imgFile],
          quantity: 1,
          nft
        });
    } 
    alert.success("Products Created");
    navigate("/profile"); 
    } catch (err) {
      alert.error("Some Error Occured while creting product");
    }
  };

  


  async function uploadMetadataToIPFS(tokenId) {
  //  console.log(formData);
      const {productName, description, MRP} = formData;
      
      //Make sure that none of the fields are empty
      if( !productName || !description || !MRP)
          return;

      const nftJSON = {
          productName, description, MRP, tokenId
      }

      try {
          //upload the metadata JSON to IPFS
          const response = await uploadJSONToIPFS(nftJSON);
          if(response.success === true){
              console.log("Uploaded JSON to Pinata: ", response)
              nft = response.nft;
              return {
                pinataUrl: response.pinataURL
              };
          }
      }
      catch(e) {
          console.log("error uploading JSON metadata:", e)
      }
  }

  async function listNFT(tokenId) {
    //Upload data to IPFS
    try {
        const metadataURL = await uploadMetadataToIPFS(tokenId);
       
        //After adding your Hardhat network to your metamask, this code will get providers and signers
        
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        
        // console.log(provider);
        // console.log(signer);

        //Pull the deployed contract instance
        let contract = new ethers.Contract(OwnerNFT.address, OwnerNFT.abi, signer)

        //massage the params to be sent to the create NFT request
        

        //actually create the NFT
        
        let transaction = await contract.createToken(metadataURL)
        await transaction.wait()

        console.log(transaction);

        console.log("Successfully listed your NFT!");
       
    }
    catch(e) {
      console.log(e);   
    }
  }

  return (
    <div className={`${style["new-product-page"]} page`}>
      <div className={style["main-container"]}>
        <PhotoEditor imgData={imgData} setImgData={setImgData} />
        <div className={style["form-fields"]}>
          <InputHandler
            className={style["input"]}
            placeholder="Product name"
            value={formData.productName}
            onChange={(e) => {
              setFormData({ ...formData, productName: e.target.value });
            }}
          />
          <div className={style["categories-container"]}>
            {formData.categories.map((ele, index) => {
              return (
                <InputHandler
                  key={index}
                  placeholder={
                    index === 0 ? "category" : `sub-category ${index}`
                  }
                  value={ele}
                  onChange={(e) => {
                    const tempArr = formData.categories;
                    tempArr[index] = e.target.value;
                    setFormData({ ...formData, categories: tempArr });
                  }}
                />
              );
            })}
            <Primary
              className={style["add-category-button"]}
              onClick={() => {
                const tempArr = formData.categories;
                tempArr.push("");
                setFormData({ ...formData, categories: tempArr });
              }}
            >
              <img className={style["add-icon"]} src={addIconWhite} alt="" />
            </Primary>
          </div>
          <InputHandler
            className={style["input"]}
            placeholder="MRP"
            value={formData.MRP}
            onChange={(e) => {
              setFormData({ ...formData, MRP: e.target.value });
            }}
          />
          <InputHandler
            className={`${style["input"]} ${style["description"]}`}
            placeholder="Description"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />
          <InputHandler
            className={style["input"]}
            placeholder="Quantity"
            value={formData.qty >= 1 ? formData.qty : ""}
            type="number"
            onChange={(e) => {
              setFormData({ ...formData, qty: e.target.value });
            }}
          />
        </div>
      </div>
      <Primary onClick={onsubmitHandler}>
        {formData.qty > 1 ? "Add Products" : "Add Product"}
      </Primary>
    </div>
  );
};

export default NewProduct;
