import React from "react";
import Modal from "../../../../components/Modal";
import AppForm from "../../../../components/AppForm";
import Button from "../../../../components/Button";
import ErrorMessage from "../../../../components/ErrorMessage";

import { useQueryClient } from "@tanstack/react-query";
import { useAddJarMembers } from "../../hooks/useAddJarMembers";
import MembersInput from "./MembersInput";

function AddJarMembers({ showAddUser, setShowAddUser, jarData }) {
  const { addJarMembers, isPending, isError, error } = useAddJarMembers();
  const queryClient = useQueryClient();

  const onSubmit = (data, { reset }) => {
    addJarMembers(
      {
        jarId: jarData.id,
        usernames: data.people.map((p) => p.value),
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["jar_entries", jarData.id],
          });

          reset();
          setShowAddUser(false);
        },
      },
    );
  };

  return (
    <Modal isOpen={showAddUser} onClick={() => setShowAddUser(false)}>
      <AppForm
        onHandleSubmit={onSubmit}
        defaultValues={{
          people: [],
          personInput: "",
        }}
      >
        <AppForm.Header header={`Add Members to ${jarData.title}`} />

        {isError ? (
          <ErrorMessage message={error.message} className="caption" />
        ) : null}

        <MembersInput />

        <AppForm.Footer>
          <Button
            type="button"
            label="Cancel"
            onClick={() => setShowAddUser(false)}
            className="secondary"
          />
          <Button
            type="submit"
            label={isPending ? "Add..." : "Add"}
            disabled={isPending}
            className="primary"
          />
        </AppForm.Footer>
      </AppForm>
    </Modal>
  );
}

export default AddJarMembers;
