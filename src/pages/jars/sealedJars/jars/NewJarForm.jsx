import React from "react";
import Button from "../../../../components/Button";
import AppForm from "../../../../components/AppForm";
import ShareJar from "./ShareJar";
import Modal from "../../../../components/Modal";

import { LuLock } from "react-icons/lu";
import { useAddJar } from "../../hooks/useAddJar";
import { useAuth } from "../../../auth/context/AuthContext";
import { useQueryClient } from "@tanstack/react-query";
import { jarThemes } from "./config/jarThemes";

function NewJarForm({ setShowAddJar, showAddJar }) {
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
        sharedWith: data.sharedWith,
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

  if (!showAddJar) return null;

  return (
    <Modal isOpen={showAddJar} onClick={() => setShowAddJar(false)}>
      <AppForm onHandleSubmit={onSubmit} defaultValues={{ privacy: "private" }}>
        <AppForm.Header header="Create new jar" />

        <AppForm.FormField>
          <AppForm.Label label="Title">
            <AppForm.Input
              type="text"
              name="title"
              errorMessage="Title is required"
            />
          </AppForm.Label>
          <AppForm.Error name="title" />
        </AppForm.FormField>

        <AppForm.FormField>
          <AppForm.Label label="Theme">
            <AppForm.FlexContainer>
              {jarThemes.map((theme) => {
                return (
                  <AppForm.Label
                    className="secondary-label"
                    label={`${theme.emoji} ${theme.label}`}
                    key={theme.id}
                  >
                    <AppForm.Input
                      type="radio"
                      name="theme"
                      id={theme.label}
                      value={theme.label}
                      errorMessage="Theme is required"
                    />
                  </AppForm.Label>
                );
              })}
            </AppForm.FlexContainer>
          </AppForm.Label>
          <AppForm.Error name="theme" />
        </AppForm.FormField>

        <AppForm.FormField>
          <AppForm.Label label="Lock until">
            <AppForm.Input
              type="date"
              name="date"
              min={todaysDate}
              errorMessage="Date is required"
            />
          </AppForm.Label>
          <AppForm.Error name="date" />
        </AppForm.FormField>

        <AppForm.Label label="Access type">
          <AppForm.FormField>
            <AppForm.FlexContainer>
              <AppForm.Label
                label={
                  <>
                    <LuLock />
                    private
                  </>
                }
              >
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
          </AppForm.FormField>
        </AppForm.Label>

        <ShareJar />

        <AppForm.Footer>
          <Button
            type="button"
            label="Cancel"
            onClick={() => setShowAddJar(false)}
            className="secondary"
          />
          <Button
            type="submit"
            label={isPending ? "Create jar.." : "Create jar"}
            disabled={isPending}
            className="primary"
          />
        </AppForm.Footer>
      </AppForm>
    </Modal>
  );
}

export default NewJarForm;
