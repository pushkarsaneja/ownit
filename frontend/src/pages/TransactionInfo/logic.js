import http from "../../lib/http";

export const getTransactionInfo = (id) => {
  return new Promise((resolve, reject) => {
    http(`/api/v1/transaction/${id}`, "GET")
      .then((res) => {
        if (!res.data.success) {
          reject(res.data.message);
        } else {
          resolve(res.data.transaction);
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};
