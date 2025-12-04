import type { Country } from "./Country";

export type Driver = {
  driverId: string;
  name: string;
  surname: string;
  shortName: string;
  number: number;
  birthday: string;
  nationality: string;
  country: Country
  url: string;
}