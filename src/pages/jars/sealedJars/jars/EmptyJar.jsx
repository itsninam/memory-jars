import React from "react";
import AddJar from "./AddJar";

function EmptyJar({ sealed, label }) {
  return (
    <div className="empty-jar-container">
      <p className="empty-jar-message">{label}</p>
      {sealed ? <AddJar /> : null}
    </div>
  );
}

export default EmptyJar;
