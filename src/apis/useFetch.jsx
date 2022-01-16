import { useState, useEffect } from "react";
import axios from "axios";

//set base url
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

// set header env dev_filters for every api call
axios.interceptors.request.use(
  (requests) => {
    requests.headers.env = process.env.REACT_APP_DEV_FILTERS;
    localStorage.getItem("userToken") &&
      (requests.headers.Authorization = localStorage.getItem("userToken"));
    return requests;
  },
  (error) => Promise.reject(error)
);

function useFetch() {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
//   const [error, setErrors] = useState("");

  const fetchApi = ({ url, method, body = null, headers = null }) => {
    setLoading(true)
    axios({
      url: url,
      method: method,
      data: body,
      headers: !headers ? { "Content-Type": "application/json" } : headers,
    })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        // setErrors(err);
      })
      .finally(() => {
        setLoading(false)
      });
  };

  return { response,loading, fetchApi };
}

export default useFetch;
