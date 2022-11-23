import http from "../../lib/http";

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    http(`/api/v1/product/${id}`, "GET")
      .then((res) => {
        console.log(res);
        if (!res.data.success) {
          reject(res.data.message);
        } else {
          resolve(res.data.product);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
