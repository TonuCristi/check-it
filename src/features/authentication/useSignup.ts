import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { createUser } from "../../services/apiAuth";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: signUpUser,
    isPending,
    error,
  } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      localStorage.setItem("role", "authenticated");
      queryClient.setQueryData(["user"], data.user);
      navigate("/", { replace: true });
    },
  });

  return { signUpUser, isPending, error };
}
