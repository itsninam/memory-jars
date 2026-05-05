import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../../services/auth";

export const useLogin = () => {
  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onError: (error) => {
      console.log(error.message);
      alert(error.message);
    },
  });

  return { login, isPending, error };
};
