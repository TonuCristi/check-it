import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { removeNote } from "../../services/apiNotes";

export function useDeleteNote() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteNote } = useMutation({
    mutationFn: removeNote,
    onSuccess: () => {
      queryClient.invalidateQueries();
      sessionStorage.removeItem("id");
      navigate("/");
    },
  });

  return { deleteNote };
}
