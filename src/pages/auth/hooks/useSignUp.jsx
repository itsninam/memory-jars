import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../../services/auth";

export const useSignUp = () => {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    onError: (error) => {
      console.log(error.message);
      alert(error.message);
    },
  });

  return { signUp, isPending };
};
