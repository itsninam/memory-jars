import React from "react";
import { useParams } from "react-router-dom";
import { useJarEntries } from "../../hooks/useJarEntries";
import { compareDate } from "../../../../utils/compareDate";

import LockedJar from "../jars/LockedJar";
import Loading from "../../../../components/Loading";
import Error from "../../../../components/Error";
import GoBack from "../../../../components/GoBack";
import JarEntriesList from "./JarEntriesList";
import AddEntry from "./AddEntry";
import Header from "../../../../components/Header";

function JarEntries() {
  const { theme, id } = useParams();

  const { data, isLoading, isError, error } = useJarEntries(Number(id));
  const jarIsLocked = compareDate(data?.locked_until);
  const jarHasEntries = data?.jar_entries.length > 0;

  if (isLoading) return <Loading />;

  if (isError) return <Error message={error.message} />;

  return (
    <>
      <Header navigation={<GoBack />} actions={<AddEntry jarId={id} />} />

      {jarIsLocked ? (
        <LockedJar data={data} jarHasEntries={jarHasEntries} jarId={id} />
      ) : (
        <JarEntriesList data={data} theme={theme} />
      )}
    </>
  );
}

export default JarEntries;
