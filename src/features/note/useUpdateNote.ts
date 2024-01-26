import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateNote } from "../../services/apiNotes";

export function useUpdateNote() {
  const queryClient = useQueryClient();

  const {
    mutate: editNote,
    isPending,
    error: updateError,
  } = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return { editNote, isPending, updateError };
}
