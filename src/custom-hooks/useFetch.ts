import { useState, useEffect } from "react";

export function useFetch<T>(url: string, options: Record<string, unknown>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, options);
      const data = await res.json();
      setData(data);
    };

    try {
      fetchData();
    } catch (error) {
      setError(error instanceof Error ? error : new Error(String(error)));
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  return { data, loading, error };
}
