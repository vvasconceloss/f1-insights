import { fetchLastRaceResult } from "@/services/lastRaceService";
import type { LastRace } from "@/types/Race";
import { useEffect, useState } from "react";

export const useLastRaceResult = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<LastRace | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchLastRaceResult(controller.signal)
      .then(setData)
      .catch((err) => {
        if (err.name !== "CanceledError") setError("Failed to load last race");
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { data, loading, error };
}