import React, { useMemo } from "react";
import { useJars } from "../../hooks/useJars";
import { useAuth } from "../../../auth/context/AuthContext";
import SealedJar from "./SealedJar";
import Loading from "../../../../components/Loading";
import Error from "../../../../components/Error";
import AddJar from "./AddJar";
import CardList from "../../../../components/card/CardList";
import Header from "../../../../components/Header";

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
      };
    });
  }, [data, user.id]);

  if (isLoading) return <Loading />;

  if (isError) return <Error message={error.message} />;

  if (formattedJars.length === 0) return <p>Add jars</p>;

  return (
    <>
      <Header title="My Jars" actions={<AddJar />} />

      <CardList>
        {formattedJars.map((jar) => {
          return <SealedJar key={jar.id} jar={jar} />;
        })}
      </CardList>
    </>
  );
}

export default SealedJarsList;
