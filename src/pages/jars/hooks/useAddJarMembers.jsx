import { useMutation } from "@tanstack/react-query";
import { addJarMembers as addJarMembersApi } from "../../../services/jars";

export const useAddJarMembers = () => {
  const {
    mutate: addJarMembers,
    isError,
    error,
    isPending,
  } = useMutation({
    mutationFn: addJarMembersApi,
  });

  return { addJarMembers, isError, error, isPending };
};
