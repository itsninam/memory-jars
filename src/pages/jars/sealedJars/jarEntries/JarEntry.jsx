import React from "react";
import { formatDate } from "../../../../utils/formatDate";

function JarEntry({ entry }) {
  return (
    <li>
      <p>{entry.users.username}</p>
      <p>{formatDate(entry.created_at)}</p>
      <p>{entry.entry}</p>
    </li>
  );
}

export default JarEntry;
