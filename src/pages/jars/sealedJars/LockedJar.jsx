import React from "react";
import { formatDate } from "../../../utils/formatDate";
import Button from "../../../components/Button";

function LockedJar({ data, jarHasEntries }) {
  return (
    <div>
      <p>Jar is locked until {formatDate(data.locked_until)}.</p>
      <p>{data.theme}</p>
      {!jarHasEntries ? null : <p>{data.jar_entries.length} notes inside</p>}
      <Button label={!jarHasEntries ? "Start your first entry" : "Add entry"} />
    </div>
  );
}

export default LockedJar;
