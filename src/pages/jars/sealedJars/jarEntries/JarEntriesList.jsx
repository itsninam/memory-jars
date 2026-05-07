import React from "react";
import JarEntry from "./JarEntry";
import CardList from "../../../../components/card/CardList";

function JarEntriesList({ data }) {
  return (
    <CardList>
      {data?.jar_entries.map((entry) => {
        return <JarEntry entry={entry} key={entry.id} />;
      })}
    </CardList>
  );
}

export default JarEntriesList;
