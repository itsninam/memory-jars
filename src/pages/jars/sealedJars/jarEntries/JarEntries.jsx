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

function JarEntries() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useJarEntries(Number(id));
  const jarIsLocked = compareDate(data?.locked_until);
  const jarHasEntries = data?.jar_entries.length > 0;

  if (isLoading) return <Loading />;

  if (isError) return <Error message={error.message} />;

  if (jarIsLocked)
    return <LockedJar data={data} jarHasEntries={jarHasEntries} jarId={id} />;

  return (
    <>
      <GoBack />
      <JarEntriesList data={data} />
      <AddEntry jarId={id} />
    </>
  );
}

export default JarEntries;
