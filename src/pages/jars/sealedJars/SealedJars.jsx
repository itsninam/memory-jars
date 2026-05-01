import React, { useMemo } from "react";
import { useJars } from "../hooks/useJars";
import { useAuth } from "../../auth/context/AuthContext";
import SealedJar from "./SealedJar";
import Loading from "../../../components/Loading";

function SealedJars() {
  const { user } = useAuth();
  const { data, isLoading, isError, error } = useJars(user.id);

  const formattedJars = useMemo(() => {
    return data?.map((item) => {
      const sharedUsers = item.jars.jar_members
        .filter((member) => member.user_id !== user.id)
        .map((member) => member.users?.username);

      return {
        id: item.id,
        title: item.jars.title,
        users: sharedUsers,
        theme: item.jars.theme,
        expiry: item.jars.locked_until,
      };
    });
  }, [data, user.id]);

  if (isLoading) return <Loading />;

  if (isError) return <Error error={error.message} />;

  if (data.length === 0) return <p>Add jars</p>;

  return (
    <ul>
      {formattedJars.map((jar) => {
        return <SealedJar key={jar.id} jar={jar} />;
      })}
    </ul>
  );
}

export default SealedJars;
