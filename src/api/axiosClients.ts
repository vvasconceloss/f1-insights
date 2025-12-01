import axios from "axios"

export const openF1 = axios.create({
  baseURL: "https://api.openf1.org/v1/"
});

export const devF1 = axios.create({
  baseURL: "https://f1connectapi.vercel.app/"
});