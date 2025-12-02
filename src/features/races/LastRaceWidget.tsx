import { useEffect, useState } from "react";
import type { LastRaceResponse } from "@/types/Race";
import { fetchLastRaceResult } from "@/services/results";

export const LastRaceWidget = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<LastRaceResponse | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);

        const lastResult = await fetchLastRaceResult(controller.signal);
        setData(lastResult);
      } catch (err: any) {
        if (err.name == "CanceledError") return;
        setErrorMessage("An error occurred while retrieving the latest result data");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <>Loading…</>;
  if (errorMessage) return <>{errorMessage}</>;

  return (
    <section>
      <article className="py-5 border-b-2 border-b-[#FF1E00]">
        <h2 className="font-bold text-2xl uppercase">{data?.races.raceName}</h2>
        <h3 className="text-lg text-zinc-600">{data?.races.circuit.city} - {data?.races.circuit.circuitName}</h3>
      </article>
    </section>
  )
}