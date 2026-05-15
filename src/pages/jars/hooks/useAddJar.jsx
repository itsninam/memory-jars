import { useMutation } from "@tanstack/react-query";
import { addJar as addJarApi } from "../../../services/jars";

export const useAddJar = () => {
  const {
    mutate: addJar,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: addJarApi,
  });

  return { addJar, isPending, isError, error };
};
