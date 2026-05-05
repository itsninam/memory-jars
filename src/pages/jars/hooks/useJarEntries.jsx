import { useQuery } from "@tanstack/react-query";
import { getJarEntries } from "../../../services/jars";

export const useJarEntries = (jarId) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["jar_entries", jarId],
    queryFn: () => getJarEntries(jarId),
    enabled: !!jarId,
  });

  return { data, isLoading, isError, error };
};
