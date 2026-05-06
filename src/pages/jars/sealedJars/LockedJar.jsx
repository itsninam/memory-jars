import React from "react";
import { formatDate } from "../../../utils/formatDate";
import AddEntry from "./AddEntry";
import GoBack from "../../../components/GoBack";

function LockedJar({ data, jarHasEntries, jarId }) {
  return (
    <div>
      <GoBack />
      <p>Jar is locked until {formatDate(data.locked_until)}.</p>
      <p>{data.theme}</p>
      {!jarHasEntries ? null : <p>{data.jar_entries.length} notes inside</p>}
      <AddEntry jarId={jarId} />
    </div>
  );
}

export default LockedJar;
