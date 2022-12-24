import http from "../../lib/http";

export const saveNewAddress = (address) => {
  return new Promise((resolve, reject) => {
    http("/api/v1/addAddress", "POST", address)
      .then((res) => {
        if (!res.data.success) {
          reject(res.data.message);
        } else {
          resolve(res.data.address);
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};

export const getPersonalInfo = () => {
  return new Promise((resolve, reject) => {
    http("/api/v1/getPersonalInfo", "GET")
      .then((res) => {
        if (!res.data.success) {
          reject(res.data.message);
        } else {
          resolve(res.data.user);
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};

export const getAddressInfo = () => {
  return new Promise((resolve, reject) => {
    http("/api/v1/getAllAddress", "GET")
      .then((res) => {
        if (!res.data.success) {
          reject(res.data.message);
        } else {
          resolve(res.data.addresses);
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};

export const deleteAddress = (id) => {
  return new Promise((resolve, reject) => {
    http("/api/v1/deleteAddress", "DELETE", id)
      .then((res) => {
        if (!res.data.success) {
          reject(res.data.message);
        } else {
          resolve(res.data.addresses);
        }
      })
      .catch((err) => {
        reject(err.response.statusText);
      });
  });
};
