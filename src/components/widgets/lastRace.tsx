import { useLastRaceResult } from "@/hooks/useLastRaceResult";

export const LastRaceWidget = () => {
  const { data, loading, error } = useLastRaceResult();

  if (error) return <>{error}</>;
  if (loading) return <>Loading…</>;

  return (
    <section>
      <article className="py-5 border-b-2 border-b-[#FF1E00]">
        <h2 className="font-bold text-2xl uppercase">{data?.races.raceName}</h2>
        <h3 className="text-lg text-zinc-600">{data?.races.circuit.city} - {data?.races.circuit.circuitName}</h3>
      </article>
    </section>
  )
}