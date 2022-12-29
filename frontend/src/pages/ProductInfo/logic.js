import http from "../../lib/http";
import store from "../../redux/store";

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

export const tranferOwnership = (to) => {
  const { currentProduct } = store.getState();
  if (!currentProduct) return;
  console.log(currentProduct);
  const { _id } = currentProduct.product;
  return new Promise((resolve, reject) => {
    http("/api/v1/transaction/create", "POST", { productId: _id, to })
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

export const markFound = (productId) => {
  return new Promise((resolve, reject) => {
    http("/api/v1/report/markUnstolen", "POST", { productId })
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
