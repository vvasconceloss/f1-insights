import type { LastRace } from "@/types/Race";
import { normalizeGrid } from "@/utils/driver/normalizeGrid";
import { DriverMovement } from "@/components/drivers/driverMovement";
import { normalizePosition } from "@/utils/driver/normalizePosition";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const LastRaceStandingWidget = ({ data }: { data: LastRace | null }) => {
  return (
    <section>
      <article className="py-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>POS</TableHead>
              <TableHead>DRIVER</TableHead>
              <TableHead>GR</TableHead>
              <TableHead>PTS</TableHead>
              <TableHead className="text-right">TIME</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.races.results.map((result) => {
              const driverGrid = normalizeGrid(result.grid);
              const driverPosition = normalizePosition(result.position);
              const driverId = result.driver.driverId || `${result.driver.name}-${result.driver.surname}`;

              return (
                <TableRow key={driverId}>
                  <TableCell>
                    {driverPosition.type == "dnf" ? "-" : `${driverPosition.value}º`}
                    {driverPosition.type == "number" && driverGrid.available && (
                      <DriverMovement position={driverPosition.value!} grid={driverGrid.value!} />
                    )}
                  </TableCell>
                  <TableCell className="flex items-center space-x-2">
                    <img 
                      className="object-contain w-8 h-8" 
                      src={result.driver.country.flags.svg} 
                      alt={result.driver.country.flags.alt} 
                    />
                    <div>
                      <h2 className="uppercase">{result.driver.name} {result.driver.surname}</h2>
                      <h2 className="text-xs text-zinc-500">{result.team.teamName}</h2>
                    </div>
                  </TableCell>
                  <TableCell>{driverGrid.available ? driverGrid.value : "PL"}</TableCell>
                  <TableCell>{result.points}</TableCell>
                  <TableCell className="text-right">{result.time.includes("DNF") ? "DNF" : result.time}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </article>
    </section>
  )
}