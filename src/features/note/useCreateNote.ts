import { useMutation, useQueryClient } from "@tanstack/react-query";

import { insertNote } from "../../services/apiNotes";
import { useNavigate } from "react-router-dom";

export function useCreateNote() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: createNote,
    isPending,
    error,
  } = useMutation({
    mutationFn: insertNote,
    onSuccess: (data) => {
      navigate(`/${data[0].id}`);
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  return { createNote, isPending, error };
}
