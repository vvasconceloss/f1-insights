import { devF1 } from "@/api/axiosClients"
import type { LastRaceResponse } from "@/types/Race";

export const fetchLastRaceResult = async (signal?: AbortSignal): Promise<LastRaceResponse> => {
  const response = await devF1.get<LastRaceResponse>("current/last/race", { signal });
  return response.data;
}