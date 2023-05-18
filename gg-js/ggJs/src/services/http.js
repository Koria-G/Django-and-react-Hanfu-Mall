import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
};

export default http;