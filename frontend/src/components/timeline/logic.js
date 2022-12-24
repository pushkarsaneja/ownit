import http from "../../lib/http";

export const getOwnershipData = (id) => {
  return new Promise((resolve, reject) => {
    http(`/api/v1/product/ownerships/${id}`, "GET")
      .then((res) => {
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
