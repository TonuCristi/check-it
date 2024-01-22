import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { getNote } from "../../services/apiNotes";

export function useNote() {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const id = sessionStorage.getItem("id");

  const { data, isLoading, error } = useQuery({
    queryKey: [`note${noteId ? noteId : id}`],
    queryFn: () => {
      if (noteId) {
        navigate(`/${noteId}`);
        return getNote(noteId);
      }

      if (id) {
        navigate(`/${id}`);
        return getNote(id);
      }

      return [null];
    },
  });

  const note = data?.[0];

  return { note, isLoading, error };
}
