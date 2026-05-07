import React from "react";
import Button from "../../../../components/Button";
import AppForm from "../../../../components/AppForm";
import { useAddJar } from "../../hooks/useAddJar";
import { useAuth } from "../../../auth/context/AuthContext";
import { useQueryClient } from "@tanstack/react-query";
import ShareJar from "./ShareJar";

function JarForm({ setShowAddJar }) {
  const { addJar, isPending } = useAddJar();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const todaysDate = new Date().toISOString().split("T")[0];

  const onSubmit = (data, { reset }) => {
    addJar(
      {
        createdBy: user.id,
        lockedUntil: data.date,
        theme: data.theme,
        title: data.title,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["jars", user.id]);
          reset();
          setShowAddJar(false);
        },
      },
    );
  };

  return (
    <AppForm onHandleSubmit={onSubmit} defaultValues={{ privacy: "private" }}>
      <AppForm.Header header="Create new jar" />

      <AppForm.Label label="Jar title">
        <AppForm.Input
          type="text"
          name="title"
          errorMessage="Title is required"
        />
      </AppForm.Label>
      <AppForm.Error name="title" />

      <AppForm.Label label="Theme">
        <AppForm.Input
          type="text"
          name="theme"
          errorMessage="Theme is required"
        />
      </AppForm.Label>
      <AppForm.Error name="theme" />

      <AppForm.Label label="Lock until">
        <AppForm.Input
          type="date"
          name="date"
          min={todaysDate}
          errorMessage="Date is required"
        />
      </AppForm.Label>
      <AppForm.Error name="date" />

      <AppForm.Label label="Access type">
        <AppForm.FlexContainer>
          <AppForm.Label label="private">
            <AppForm.Input
              type="radio"
              name="privacy"
              id="private"
              value="private"
            />
          </AppForm.Label>

          <AppForm.Label label="shared">
            <AppForm.Input
              type="radio"
              name="privacy"
              id="shared"
              value="shared"
            />
          </AppForm.Label>
        </AppForm.FlexContainer>
      </AppForm.Label>

      <ShareJar />

      <AppForm.Footer>
        <Button
          type="submit"
          label={isPending ? "Add jar.." : "Add"}
          disabled={isPending}
        />
        <Button
          type="button"
          label="Cancel"
          onClick={() => setShowAddJar(false)}
        />
      </AppForm.Footer>
    </AppForm>
  );
}

export default JarForm;
