import React from "react";
import AddJar from "./AddJar";

function EmptyJarList({ sealed }) {
  return (
    <div className="empty-jar-container">
      <p className="empty-jar-message">
        {sealed
          ? "Your jar collection is empty. Start your first memory ✨"
          : "Your jars are still sealed 🔒"}
      </p>
      {sealed ? <AddJar /> : null}
    </div>
  );
}

export default EmptyJarList;
