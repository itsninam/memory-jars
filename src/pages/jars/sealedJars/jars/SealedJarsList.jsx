import React, { useMemo } from "react";
import SealedJar from "./SealedJar";
import Loading from "../../../../components/Loading";
import Error from "../../../../components/Error";
import AddJar from "./AddJar";
import CardList from "../../../../components/card/CardList";
import Header from "../../../../components/Header";

import { useJars } from "../../hooks/useJars";
import { useAuth } from "../../../auth/context/AuthContext";
import EmptyJarList from "./EmptyJarList";

function SealedJarsList() {
  const { user } = useAuth();
  const { data, isLoading, isError, error } = useJars(user.id);

  const formattedJars = useMemo(() => {
    if (!data) return [];

    return data.map((item) => {
      const sharedUsers = item.jars.jar_members
        .filter((member) => member.user_id !== user.id)
        .map((member) => member.users?.username);

      return {
        id: item.id,
        title: item.jars.title,
        users: sharedUsers,
        theme: item.jars.theme,
        expiry: item.jars.locked_until,
        jar_id: item.jars.id,
        entries: item.jars.jar_entries.length,
      };
    });
  }, [data, user.id]);

  if (isLoading) return <Loading />;

  if (isError) return <Error message={error.message} />;

  if (formattedJars.length === 0) return <EmptyJarList />;

  return (
    <>
      <Header title="My Jars" actions={<AddJar />} />

      <CardList className="jar">
        {formattedJars.map((jar) => {
          return <SealedJar key={jar.id} jar={jar} />;
        })}
      </CardList>
    </>
  );
}

export default SealedJarsList;
