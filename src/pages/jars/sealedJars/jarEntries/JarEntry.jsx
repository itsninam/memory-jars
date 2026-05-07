import React from "react";
import { formatDate } from "../../../../utils/formatDate";
import CardItem from "../../../../components/card/CardItem";

function JarEntry({ entry }) {
  return (
    <CardItem>
      <p>{entry.users.username}</p>
      <p>{formatDate(entry.created_at)}</p>
      <p>{entry.entry}</p>
    </CardItem>
  );
}

export default JarEntry;
