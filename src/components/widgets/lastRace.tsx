import type { LastRace } from "@/types/Race"

export const LastRaceWidget = ({ data }: { data: LastRace | null }) => {
  return (
    <section>
      <article className="py-5 border-b-2">
        <h2 className="font-bold text-2xl uppercase">{data?.races.raceName}</h2>
        <h3 className="text-lg text-zinc-600">{data?.races.circuit.city} - {data?.races.circuit.circuitName}</h3>
      </article>
    </section>
  )
}