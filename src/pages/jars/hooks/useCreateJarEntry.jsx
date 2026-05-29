import { useMutation } from "@tanstack/react-query";
import { createJarEntry as createJarEntryApi } from "../../../services/jars";

export const useCreateJarEntry = () => {
  const { mutate: createJarEntry, isPending } = useMutation({
    mutationFn: createJarEntryApi,
    onError: (error) => {
      alert(error.message);
    },
  });

  return { createJarEntry, isPending };
};
