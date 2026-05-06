import React, { useState } from "react";
import AppForm from "../../../../components/AppForm";
import Button from "../../../../components/Button";
import { useAuth } from "../../../auth/context/AuthContext";
import { useQueryClient } from "@tanstack/react-query";
import { useAddJar } from "../../hooks/useAddJar";

function AddJar() {
  const [showAddJar, setShowAddJar] = useState(false);
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
    <>
      <Button label="+ New Jar" onClick={() => setShowAddJar(true)} />

      {showAddJar ? (
        <AppForm onHandleSubmit={onSubmit}>
          <AppForm.Label label="Lock until" />
          <AppForm.Input
            type="date"
            name="date"
            min={todaysDate}
            errorMessage="Date is required"
          />

          <AppForm.Label label="Jar title" />
          <AppForm.Input
            type="text"
            name="title"
            errorMessage="Title is required"
          />

          <AppForm.Label label="Theme" />
          <AppForm.Input
            type="text"
            name="theme"
            errorMessage="Theme is required"
          />

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
        </AppForm>
      ) : null}
    </>
  );
}

export default AddJar;
