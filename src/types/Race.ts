import type { Result } from "./Result";
import type { Circuit } from "./Circuit";

export type Race = {
  round: number;
  date: string;
  time: string;
  url: string;
  raceId: string;
  raceName: string;
  circuit: Circuit;
  results: Result[];
}

export type LastRace = {
  api: string;
  url: string;
  limit: number;
  offset: number;
  total: number;
  season: number;
  races: Race;
}