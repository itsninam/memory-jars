import React from "react";
import JarEntry from "./JarEntry";
import CardList from "../../../../components/card/CardList";

function JarEntriesList({ data, theme }) {
  return (
    <CardList className="jar-entry">
      {data?.jar_entries.map((entry) => {
        return <JarEntry entry={entry} key={entry.id} theme={theme} />;
      })}
    </CardList>
  );
}

export default JarEntriesList;
