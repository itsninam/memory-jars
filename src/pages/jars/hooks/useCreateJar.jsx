import { useMutation } from "@tanstack/react-query";
import { createJar as createJarApi } from "../../../services/jars";

export const useCreateJar = () => {
  const {
    mutate: createJar,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: createJarApi,
  });

  return { createJar, isPending, isError, error };
};
