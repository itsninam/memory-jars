import React from "react";
import AddJar from "./AddJar";

function EmptyJarList() {
  return (
    <div className="empty-jar-container">
      <p className="empty-jar-message">
        Your jar collection is empty. Start your first memory ✨
      </p>
      <AddJar />
    </div>
  );
}

export default EmptyJarList;
