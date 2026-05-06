import React, { useState } from "react";
import AppForm from "../../../components/AppForm";
import Button from "../../../components/Button";
import { useAuth } from "../../auth/context/AuthContext";
import { useAddJarEntry } from "../hooks/useAddJarEntry";
import { useQueryClient } from "@tanstack/react-query";

function AddEntry({ jarId }) {
  const [showAddEntry, setShowAddEntry] = useState(false);
  const { addJarEntry, isPending } = useAddJarEntry();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  
  const onSubmit = (data, { reset }) => {
    addJarEntry(
      {
        jarId: jarId,
        entry: data.note,
        userId: user.id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["jar_entries", jarId]);
          reset();
          setShowAddEntry(false);
        },
      },
    );
  };

  return (
    <>
      <Button label="Add entry" onClick={() => setShowAddEntry(true)} />

      {showAddEntry ? (
        <AppForm onHandleSubmit={onSubmit}>
          <AppForm.Label label="Your note" />
          <AppForm.Input
            type="text"
            name="note"
            errorMessage="Note is required"
          />

          <Button
            type="submit"
            label={isPending ? "Drop your note..." : "Drop your note"}
            disabled={isPending}
          />
          <Button
            type="button"
            label="Cancel"
            onClick={() => setShowAddEntry(false)}
          />
        </AppForm>
      ) : null}
    </>
  );
}

export default AddEntry;
