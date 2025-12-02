import type { Result } from "./Result";
import type { Circuit } from "./Circuit";

export interface Race {
  round: number;
  date: string;
  time: string;
  url: string;
  raceId: string;
  raceName: string;
  circuit: Circuit;
  results: Result[];
}

export interface LastRaceResponse {
  api: string;
  url: string;
  limit: number;
  offset: number;
  total: number;
  season: number;
  races: Race;
}