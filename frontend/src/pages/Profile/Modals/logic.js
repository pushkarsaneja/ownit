import http from "../../../lib/http";

export const savePersonalInfo = (data) => {
  return new Promise((resolve, reject) => {
    http("/api/v1/updatePersonalInfo", "PUT", data)
      .then((res) => {
        if (!res.data.success) {
          reject(res.data.message);
        } else {
          resolve(res.data.personalInfo);
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};
