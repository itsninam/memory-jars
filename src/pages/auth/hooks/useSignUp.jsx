import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../../services/auth";

export const useSignUp = () => {
  const {
    mutate: signUp,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: signUpApi,
  });

  return { signUp, isPending, isError, error };
};
