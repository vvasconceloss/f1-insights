import axios from "axios";

const restCountriesAPI = axios.create({
  timeout: 10000,
  baseURL: "https://restcountries.com/v3.1/"
})

export async function getCountryByName(name: string, signal?: AbortSignal) {
  return (await restCountriesAPI.get(`/name/${name}`, { signal })).data;
}