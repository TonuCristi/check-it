import { useQuery } from "@tanstack/react-query";

import { getNotes } from "../services/apiNotes";

export function useNotes(id: string | undefined) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["notes"],
    queryFn: () => getNotes(id),
  });

  return { data, isLoading, error };
}
