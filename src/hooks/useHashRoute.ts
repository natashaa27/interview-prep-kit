import { useEffect, useState, useCallback } from "react";

function readHash(): string[] {
  const raw = window.location.hash.replace(/^#\/?/, "");
  return raw ? raw.split("/").filter(Boolean) : [];
}

export function useHashRoute() {
  const [segments, setSegments] = useState<string[]>(readHash());

  useEffect(() => {
    const onHashChange = () => setSegments(readHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path.startsWith("/") ? path : `/${path}`;
  }, []);

  return { segments, navigate };
}
