// src/hooks/useHttp.ts
import { useState, useEffect, useCallback } from 'react';

interface UseHttpResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface HttpOptions {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
}

const fetchData = async <T>(
  url: string,
  options: HttpOptions,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  setData: React.Dispatch<React.SetStateAction<T | null>>,
  signal: AbortSignal
) => {
  setLoading(true);
  setError(null);

  try {
    const response = await fetch(url, { ...options, signal });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    setData(result);
  } catch (error: any) {
    if (error.name === 'AbortError') {
      // Request was canceled
      return;
    }
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

const useHttp = <T = any>(url: string, options: HttpOptions = {}): UseHttpResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDataCallback = useCallback(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchData(url, options, setLoading, setError, setData, signal);

    return () => {
      controller.abort(); // Cancel fetch request on cleanup
    };
  }, [url, options.method, options.headers, options.body]);

  useEffect(() => {
    const cleanup = fetchDataCallback();
    return cleanup; // Cleanup function to cancel the request
  }, [fetchDataCallback]);

  return { data, loading, error };
};

export default useHttp;
