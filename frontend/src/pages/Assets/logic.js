import http from "../../lib/http";

export const getAssests = (currentlyOwned, sort, search) => {
  return new Promise((resolve, reject) => {
    http(
      `/api/v1/assests?all=${
        currentlyOwned ? "false" : "true"
      }&search=${search}&sort=${sort}`,
      "GET"
    )
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
