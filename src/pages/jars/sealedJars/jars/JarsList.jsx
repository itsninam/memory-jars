import React, { useMemo } from "react";
import Jar from "./Jar";
import Loading from "../../../../components/Loading";
import AddJar from "./AddJar";
import CardList from "../../../../components/card/CardList";
import Header from "../../../../components/Header";
import EmptyJar from "./EmptyJar";
import ErrorMessage from "../../../../components/ErrorMessage";

import { useJars } from "../../hooks/useJars";
import { useAuth } from "../../../auth/context/AuthContext";
import { getDaysLeft } from "../../../../utils/getDaysLeft";
import { formatJars } from "../../../../utils/formatJars";

function JarsList({ type }) {
  const { user } = useAuth();
  const { data, isLoading, isError, error } = useJars(user.id);
  const sealed = type === "sealed";

  const jarData = useMemo(() => {
    if (!data) return [];
    return data;
  }, [data]);

  const jars = jarData
    .map((item) => item.jars)
    .filter((jar) =>
      sealed
        ? getDaysLeft(jar.locked_until) > 0
        : getDaysLeft(jar.locked_until) <= 0,
    );

  const formattedJars = formatJars(jars, user.id);

  if (isLoading) return <Loading />;

  if (isError) return <ErrorMessage message={error.message} />;

  if (formattedJars.length === 0)
    return (
      <EmptyJar
        sealed={sealed}
        label={
          sealed
            ? "Your jar collection is empty. Start making memories ✨"
            : "No unsealed jars yet"
        }
      />
    );

  return (
    <>
      <Header title="My Jars" actions={sealed ? <AddJar /> : null} />

      <CardList className="jar">
        {formattedJars.map((jar) => {
          return <Jar key={jar.id} jar={jar} sealed={sealed} />;
        })}
      </CardList>
    </>
  );
}

export default JarsList;
