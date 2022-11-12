import axios from "axios";

const http = (
  URL,
  METHOD = "GET",
  PAYLOAD = {},
  HEADERS = {},
  CREDENTIALS = true,
  OPTIONS = {}
) => {
  const reqConfig = {
    method: METHOD,
    url: URL,
    headers: HEADERS,
    withCredentials: CREDENTIALS,
    ...OPTIONS,
  };

  if (METHOD !== "GET") {
    reqConfig.data = PAYLOAD;
  }

  return axios(reqConfig);
};

export default http;
