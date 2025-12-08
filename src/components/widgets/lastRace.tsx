import type { LastRace } from "@/types/Race"

export const LastRaceWidget = ({ data }: { data: LastRace | null }) => {
  const date = new Date(data?.races.date || "");
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <section>
      <article className="py-5 border-b-2">
        <h3 className="w-72 mb-2 rounded-md text-lg text-zinc-600">
          {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()} /
          Round {data?.races.round}
        </h3>
        <h2 className="font-bold text-2xl uppercase">{data?.races.raceName}</h2>
        <h3 className="text-lg text-zinc-600">{data?.races.circuit.city} - {data?.races.circuit.circuitName}</h3>
      </article>
    </section>
  )
}