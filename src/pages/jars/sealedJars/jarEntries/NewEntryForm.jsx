import React from "react";
import AppForm from "../../../../components/AppForm";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";

import { useAddJarEntry } from "../../hooks/useAddJarEntry";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../../auth/context/AuthContext";
import { jarEntriesMoods } from "./config/jarEntriesMood";

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
        mood: data.mood,
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
        <AppForm.FormField>
          <AppForm.Label label="Your note" />
          <AppForm.TextArea
            id="note"
            name="note"
            errorMessage="Note is required"
          />
          <AppForm.Error name="note" />
        </AppForm.FormField>

        <AppForm.FormField>
          <AppForm.Label label="Mood">
            <AppForm.FlexContainer>
              {jarEntriesMoods.map((mood) => {
                return (
                  <AppForm.Label
                    className="secondary-label"
                    label={`${mood.emoji} ${mood.label}`}
                    key={mood.id}
                  >
                    <AppForm.Input
                      type="radio"
                      name="mood"
                      id={mood.label}
                      value={mood.label}
                      errorMessage="Mood is required"
                    />
                  </AppForm.Label>
                );
              })}
            </AppForm.FlexContainer>
          </AppForm.Label>
          <AppForm.Error name="mood" />
        </AppForm.FormField>

        <AppForm.Footer>
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
        </AppForm.Footer>
      </AppForm>
    </Modal>
  );
}

export default NewEntryForm;
