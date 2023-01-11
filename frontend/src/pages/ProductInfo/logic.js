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

export const tranferOwnership = (to, selectedProducts) => {
  if (!selectedProducts || selectedProducts.length === 0) return;

  const products = selectedProducts.map((item) => item.id);
  return new Promise((resolve, reject) => {
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
