import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/apiAuth";

export function useSignin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: signInUser,
    isPending,
    error,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/", { replace: true });
    },
  });

  return { signInUser, isPending, error };
}
