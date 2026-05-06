import { useMutation } from "@tanstack/react-query";
import { addJar as addJarApi } from "../../../services/jars";

export const useAddJar = () => {
  const { mutate: addJar, isPending } = useMutation({
    mutationFn: addJarApi,
    onError: (error) => {
      alert(error.message);
    },
  });

  return { addJar, isPending };
};
