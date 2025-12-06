import type { LastRace } from "@/types/Race";
import { fetchLastRaceResult } from "@/services/lastRaceService";
import { useCallback, useEffect, useRef, useState } from "react";

export const useLastRaceResult = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>("");
  const [data, setData] = useState<LastRace | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const load = useCallback(async () => {
    setError(null);
    setLoading(true);

    controllerRef.current?.abort();
    const controller = new AbortController();
    
    controllerRef.current = controller;

    try {
      const res = await fetchLastRaceResult(controller.signal);
      setData(res);
    } catch (err: any) {
      if (err?.name !== "CanceledError") setError("Failed to load last race");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    return () => controllerRef.current?.abort();
  }, [load]);

  const refetch = useCallback(() => {
    void load();
  }, [load]);

  return { data, loading, error, refetch };
};