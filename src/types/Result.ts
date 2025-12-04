import type { Team } from "./Team";
import type { Driver } from "./Driver";

export type Result = {
  position: number;
  points: number;
  grid: number;
  time: string;
  fastLap: string | null;
  retired: string | null;
  driver: Driver;
  team: Team;
}