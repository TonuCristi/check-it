import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { logout } from "../../services/apiAuth";

export function useSignout() {
  const navigate = useNavigate();

  const { mutate: signOutUser, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem("role");
      localStorage.removeItem("id");
      navigate("/", { replace: true });
    },
  });

  return { signOutUser, isPending };
}
