import http from "../../lib/http";

export const getReportData = (id) => {
  return new Promise((resolve, reject) => {
    http(`/api/v1/report/${id}`)
      .then((res) => {
        if (!res.data.success) {
          reject(res.data.message);
        } else resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};

export const updateReportStatus = (reportId, productId, status, remarks) => {
  return new Promise((resolve, reject) => {
    http(`/api/v1/report/update/status`, "PUT", {
      reportId,
      productId,
      status,
      remarks,
    })
      .then((res) => {
        if (!res.data.success) {
          reject(res.data.message);
        } else resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};
