import React from "react";
import JarEntry from "./JarEntry";
import CardList from "../../../../components/card/CardList";
import EmptyJar from "../jars/EmptyJar";

function JarEntriesList({ data, theme }) {
  if (!data.jar_entries.length) return <EmptyJar label="This jar is empty" />;

  return (
    <>
      <h2>{data.title}</h2>

      <CardList className="jar-entry">
        {data?.jar_entries.map((entry) => {
          return <JarEntry entry={entry} key={entry.id} theme={theme} />;
        })}
      </CardList>
    </>
  );
}

export default JarEntriesList;
