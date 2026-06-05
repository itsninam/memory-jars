import React from "react";
import { useParams } from "react-router-dom";
import { useJarEntries } from "../../hooks/useJarEntries";

import LockedJar from "../jars/LockedJar";
import Loading from "../../../../components/Loading";
import GoBack from "../../../../components/GoBack";
import JarEntriesList from "./JarEntriesList";
import AddEntry from "./AddEntry";
import Header from "../../../../components/Header";
import ErrorMessage from "../../../../components/ErrorMessage";

function JarEntries({ type }) {
  const { theme, id } = useParams();

  const { data, isLoading, isError, error } = useJarEntries(Number(id));
  const jarIsLocked = type === "sealed";
  const jarHasEntries = data?.jar_entries.length > 0;

  if (isLoading) return <Loading />;

  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <>
      <Header
        navigation={<GoBack />}
        actions={jarIsLocked ? <AddEntry jarId={id} /> : null}
      />

      {jarIsLocked ? (
        <LockedJar data={data} jarHasEntries={jarHasEntries} jarId={id} />
      ) : (
        <JarEntriesList data={data} theme={theme} />
      )}
    </>
  );
}

export default JarEntries;
