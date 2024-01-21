import { useQuery } from "@tanstack/react-query";

import { getNotes } from "../services/apiNotes";

export function useNotes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  return { data, isLoading, error };
}
