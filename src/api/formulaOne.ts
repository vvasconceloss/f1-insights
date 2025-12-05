import axios from "axios";
import type { LastRace } from "@/types/Race";

const devF1 = axios.create({
  timeout: 10000,
  baseURL: "https://f1api.dev/api/",
});

const openF1 = axios.create({
  timeout: 10000,
  baseURL: "https://api.openf1.org/v1/"
});

export const getLastRace = async (signal?: AbortSignal) => {
  return (await devF1.get<LastRace>("current/last/race", { signal })).data;
}

export const getDriverByAcronym = async (acronym: string, signal?: AbortSignal) => {
  return (await openF1.get<any>(`drivers?name_acronym=${acronym}`, { signal })).data[0];
}