import { devF1 } from "@/api/axiosClients"

export const fetchLastRaceResult = async (signal?: AbortSignal) => {
  const response = await devF1.get("current/last/race", { signal });
  return response.data;
}