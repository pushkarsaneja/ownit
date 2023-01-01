import http from "../../lib/http";

export const getTransactions = () => {
  return new Promise((resolve, reject) => {
    http("/api/v1/getUserTransactions", "GET")
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
