import React from "react";
import JarEntry from "./JarEntry";

function JarEntriesList({ data }) {
  return (
    <ul>
      {data?.jar_entries.map((entry) => {
        return <JarEntry entry={entry} key={entry.id} />;
      })}
    </ul>
  );
}

export default JarEntriesList;
