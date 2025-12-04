import type { Result } from "@/types/Result";
import type { Driver } from "@/types/Driver";
import type { LastRace } from "@/types/Race";
import { getLastRace } from "@/api/formulaOne";
import { getCountryByName } from "@/api/countries";

export const fetchLastRaceResult = async (signal?: AbortSignal): Promise<LastRace> => {
  const response = await getLastRace(signal);
  
  const results = await Promise.all(
    response.races.results.map(async (result: Result) => {
      const country = await getCountryByName(result.driver.nationality, signal);
  
      const newDriver: Driver = {
        driverId: result.driver.driverId,
        name: result.driver.name,
        surname: result.driver.surname,
        shortName: result.driver.shortName,
        number: result.driver.number,
        birthday: result.driver.birthday,
        nationality: result.driver.nationality,
        country: {
          name: country[0].name,
          flags: {
            svg: country[0].flags.svg,
            alt: country[0].flags.alt
          },
        },
        url: result.driver.url
      };
  
      return { ...result, driver: newDriver };
    })
  );

  return { ...response, races: { ...response.races, results } };
}