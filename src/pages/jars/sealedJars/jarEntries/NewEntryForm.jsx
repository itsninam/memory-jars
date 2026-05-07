import React from "react";
import { useAddJarEntry } from "../../hooks/useAddJarEntry";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../../auth/context/AuthContext";
import AppForm from "../../../../components/AppForm";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";

function NewEntryForm({ showAddEntry, setShowAddEntry, jarId }) {
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

  if (!showAddEntry) return null;

  return (
    <Modal isOpen={showAddEntry} onClick={() => setShowAddEntry(false)}>
      <AppForm onHandleSubmit={onSubmit}>
        <AppForm.Label label="Your note" />
        <AppForm.Input
          type="text"
          name="note"
          errorMessage="Note is required"
        />

        <Button
          type="button"
          label="Cancel"
          onClick={() => setShowAddEntry(false)}
          className="secondary"
        />
        <Button
          type="submit"
          label={isPending ? "Drop your note..." : "Drop your note"}
          disabled={isPending}
          className="primary"
        />
      </AppForm>
    </Modal>
  );
}

export default NewEntryForm;
