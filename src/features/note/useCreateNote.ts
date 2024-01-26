import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { insertNote } from "../../services/apiNotes";

interface Note {
  id: number;
  created_at: string;
  title: string;
  content: string;
}

export function useCreateNote() {
  const queryClient = useQueryClient();
  const notes: Note[] | undefined = queryClient.getQueryData(["notes"]);
  const navigate = useNavigate();

  const {
    mutate: createNote,
    isPending,
    error,
  } = useMutation({
    mutationFn: insertNote,
    onSuccess: (data) => {
      if (notes) {
        const index = notes.length + 1;

        const ids = {
          index,
          id: data[0].id,
        };

        sessionStorage.setItem("id", `${JSON.stringify(ids)}`);
      }
      navigate(`/${data[0].id}`);
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  return { createNote, isPending, error };
}
