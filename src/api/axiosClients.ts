import axios from "axios"

export const openF1 = axios.create({
  timeout: 10000,
  baseURL: "https://api.openf1.org/v1/"
});

export const devF1 = axios.create({
  timeout: 10000,
  baseURL: "https://f1api.dev/api/",
});