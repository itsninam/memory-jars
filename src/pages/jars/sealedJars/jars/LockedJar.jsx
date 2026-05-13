import React from "react";
import { formatDate } from "../../../../utils/formatDate";

function LockedJar({ data, jarHasEntries }) {
  return (
    <div>
      <p>Jar is sealed until {formatDate(data.locked_until)}.</p>
      <p>{data.theme}</p>
      {!jarHasEntries ? null : <p>{data.jar_entries.length} notes inside</p>}
    </div>
  );
}

export default LockedJar;
