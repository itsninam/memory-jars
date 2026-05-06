import { useMutation } from "@tanstack/react-query";
import { addJarEntry as addJarEntryApi } from "../../../services/jars";

export const useAddJarEntry = () => {
  const { mutate: addJarEntry, isPending } = useMutation({
    mutationFn: addJarEntryApi,
    onError: (error) => {
      alert(error.message);
    },
  });

  return { addJarEntry, isPending };
};
