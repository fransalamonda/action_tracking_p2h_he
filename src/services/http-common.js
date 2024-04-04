import axios from "axios";

export default axios.create({
  baseURL: "http://10.10.10.72:8000/api_sso_portal/Api_portal",
  headers: {
    "Content-type": "application/json",
  }
});
