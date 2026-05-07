import React, { useState } from "react";
import Button from "../../../../components/Button";
import NewEntryForm from "./NewEntryForm";

function AddEntry({ jarId }) {
  const [showAddEntry, setShowAddEntry] = useState(false);

  return (
    <>
      <Button
        leftIcon="+"
        label="Add entry"
        onClick={() => setShowAddEntry(true)}
        className="primary"
      />

      <NewEntryForm
        showAddEntry={showAddEntry}
        setShowAddEntry={setShowAddEntry}
        jarId={jarId}
      />
    </>
  );
}

export default AddEntry;
