import React from "react";
import { useParams } from "react-router-dom";
import { useJarEntries } from "../hooks/useJarEntries";
import { compareDate } from "../../../utils/compareDate";

import Loading from "../../../components/Loading";
import Error from "../../../components/Error";
import JarEntry from "./JarEntry";
import LockedJar from "./LockedJar";

function JarEntries() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useJarEntries(Number(id));
  const jarIsLocked = compareDate(data?.locked_until);
  const jarHasEntries = data?.jar_entries.length > 0;

  if (isLoading) return <Loading />;

  if (isError) return <Error message={error.message} />;

  if (jarIsLocked)
    return <LockedJar data={data} jarHasEntries={jarHasEntries} />;

  return (
    <ul>
      {data.jar_entries.map((entry) => {
        return <JarEntry entry={entry} key={entry.id} />;
      })}
    </ul>
  );
}

export default JarEntries;
