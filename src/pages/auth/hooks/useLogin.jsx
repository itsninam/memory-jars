import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../../services/auth";

export const useLogin = () => {
  const {
    mutate: login,
    isPending,
    error,
    isError,
  } = useMutation({
    mutationFn: loginApi,
  });

  return { login, isPending, error, isError };
};
