import http from "../../lib/http";
import store from "../../redux/store";
import Web3 from "web3";
import OwnerNFT from "../../OwnerNFT.json";
import { ethers } from "ethers";

export const getSearchUser = (searchText) => {
  return new Promise((resolve, reject) => {
    http("/api/v1/getUser", "POST", { searchText })
      .then((res) => {
        if (!res.data.success) {
          reject(res.data.message);
        } else {
          resolve(res.data);
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};

export const tranferOwnership = async (
  to,
  selectedProducts,
  walletAddressOfReceiver
) => {
  if (!selectedProducts || selectedProducts.length === 0) return;
  const products = selectedProducts.map((item) => item.id);

  // blockchain ke liye hai ye productTokens array , isme product ke tokens
  // honge eg [1,532,213,3123,41] aise
  const productTokens = selectedProducts.map((item) => item.token);

  console.log(productTokens, walletAddressOfReceiver);

  var promises = [];
  productTokens.forEach((tokenId) => {
    var promise = transferNftToOther(tokenId, walletAddressOfReceiver);
    promises.push(promise);
  });

  try {
    const data = await Promise.allSettled(promises);
    console.log(data);
    let errors = [];
    data.map((item) => {
      if (item.status === "rejected") {
        errors.push(item.reason);
      }
    });
    if (errors.length > 0) throw Error("nft transfer blockchain error");
    return await transferBackendcall(products, to);
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

function transferBackendcall(products, to) {
  return new Promise((resolve, reject) => {
    //   /* ye nechhe api call backend pe sare selected products ko loop karegi
    //   // frontend se nahi loop lagaya
    //   // par blockchian ke liye api call se pahele loop lagega aur sare product transfer honge on
    //   // blockchain fir ye neeche wala api call hoga jo fir jake mongo me
    //   // sabko change karga
    //    wallet address : walletAddressOfReceiver me milega */

    http("/api/v1/transaction/create", "POST", { products: products, to })
      .then((res) => {
        if (!res.data.success) {
          reject(res.data.message);
        } else {
          resolve(res.data);
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
}

async function transferNftToOther(tokenId, walletAddresss) {
  return new Promise(async (resolve, reject) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let contract = new ethers.Contract(
        OwnerNFT.address,
        OwnerNFT.abi,
        signer
      );
      console.log(walletAddresss);
      let transaction = await contract.transferNFT(walletAddresss, tokenId);

      await transaction.wait();

      console.log(transaction);

      resolve(transaction);
      console.log("Successfully transfer the NFT!");
    } catch (e) {
      reject(e);
    }
  });
}

export const reportProduct = (imgfile) => {
  const { currentProduct } = store.getState();
  if (!currentProduct) return;
  const { _id } = currentProduct.product;
  return new Promise((resolve, reject) => {
    http("/api/v1/report/create", "POST", { productId: _id, images: [imgfile] })
      .then((res) => {
        if (!res.data.success) {
          reject(res.data.message);
        } else {
          resolve(res.data);
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};

export const markFound = (reportId, productId) => {
  return new Promise((resolve, reject) => {
    http("/api/v1/report/update/status", "PUT", {
      reportId,
      productId,
      status: "closed",
    })
      .then((res) => {
        if (!res.data.success) {
          reject(res.data.message);
        } else {
          resolve(res.data);
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};
