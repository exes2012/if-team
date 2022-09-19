import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.ifteam.staj.fun/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  postEvent(url, credentials, headers) {
    return apiClient.post(url, credentials, headers);
  },
  getEvent(url, credentials) {
    return apiClient.get(url, credentials);
  },
};
