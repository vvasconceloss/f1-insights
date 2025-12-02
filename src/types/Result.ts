import type { Team } from "./Team";
import type { Driver } from "./Driver";

export interface Result {
  position: number;
  points: number;
  grid: number;
  time: string;
  fastLap: string | null;
  retired: string | null;
  driver: Driver;
  team: Team;
}