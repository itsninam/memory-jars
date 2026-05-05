import { useQuery } from "@tanstack/react-query";
import { getJars } from "../../../services/jars";

export const useJars = (userId) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["jars", userId],
    queryFn: () => getJars(userId),
    enabled: !!userId,
  });

  return { data, isLoading, isError, error };
};
