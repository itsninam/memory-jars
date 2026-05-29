import React from "react";
import Modal from "../../../../components/Modal";
import AppForm from "../../../../components/AppForm";
import Button from "../../../../components/Button";
import Error from "../../../../components/Error";
import { useQueryClient } from "@tanstack/react-query";
import { useAddJarMembers } from "../../hooks/useAddJarMembers";

function AddJarMembers({ showAddUser, setShowAddUser, jarData }) {
  const { addJarMembers, isPending, isError, error } = useAddJarMembers();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    addJarMembers(
      { jarId: jarData.id, username: data.people },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["jar_entries", jarData.id]);
          setShowAddUser(false);
        },
      },
    );
  };

  return (
    <Modal isOpen={showAddUser} onClick={() => setShowAddUser(false)}>
      <AppForm onHandleSubmit={onSubmit}>
        <AppForm.Header header={`Add Members to ${jarData.title}`} />

        {isError ? <Error message={error.message} className="caption" /> : null}

        <AppForm.FormField>
          <AppForm.Label label="People" />
          <AppForm.Input
            id="people"
            name="people"
            errorMessage="Please enter a name"
            placeholder="Type a username and press enter"
            // onKeyDown={preventSubmit}
          />
          <AppForm.Error name="people" />
        </AppForm.FormField>

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
