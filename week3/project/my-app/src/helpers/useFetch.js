/** @format */

import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let didCancelFetch = false;
    // Resets the loader and errors on subsequent calls
    setError(null);
    setLoading(true);
    const fetchData = async () => {
      try {
        if (!didCancelFetch) {
          const res = await fetch(url);
          const json= await res.json();
          setData(json);
        }
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      didCancelFetch = true;
    };
  }, [url]);

  return { data, error, loading };
}

export default useFetch;