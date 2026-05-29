import React, { useRef, useEffect } from "react";
import Button from "../../../../components/Button";
import AppForm from "../../../../components/AppForm";
import ShareJar from "./ShareJar";
import Modal from "../../../../components/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Error from "../../../../components/Error";
import AccessOption from "../../../../components/AccessOption";

import { LuLock, LuUsers } from "react-icons/lu";
import { useAuth } from "../../../auth/context/AuthContext";
import { useQueryClient } from "@tanstack/react-query";
import { jarThemes } from "./config/jarThemes";
import { Controller } from "react-hook-form";
import { addDays } from "date-fns";
import { useCreateJar } from "../../hooks/useCreateJar";

function NewJarForm({ setShowAddJar, showAddJar }) {
  const { createJar, isPending, isError, error } = useCreateJar();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const formRef = useRef(null);

  const minDate = addDays(new Date(), 5);

  const onSubmit = (data, { reset }) => {
    createJar(
      {
        createdBy: user.id,
        lockedUntil: data.date,
        theme: data.theme,
        title: data.title,
        sharedWith: data.shareWith?.trim().toLowerCase(),
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

  useEffect(() => {
    if (error && formRef.current) formRef.current.scrollTo(0, 0);
  }, [error]);

  if (!showAddJar) return null;

  return (
    <Modal isOpen={showAddJar} onClick={() => setShowAddJar(false)}>
      <AppForm
        onHandleSubmit={onSubmit}
        defaultValues={{ privacy: "private", date: null }}
        ref={formRef}
      >
        <AppForm.Header header="Create new jar" />

        {isError ? <Error message={error.message} className="caption" /> : null}

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
          <AppForm.Label label="Seal until" />
          <Controller
            name="date"
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <DatePicker
                wrapperClassName="datePicker"
                popperProps={{ strategy: "fixed" }}
                selected={field.value}
                onChange={field.onChange}
                minDate={minDate}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
                inputMode="none"
              />
            )}
          />
          <AppForm.Error name="date" />
        </AppForm.FormField>

        <AppForm.Label label="Access type" className="access">
          <AppForm.FormField>
            <AppForm.FlexContainer>
              <AppForm.Label
                label={
                  <AccessOption
                    type="outline"
                    active="active-status"
                    icon={<LuLock />}
                    label="Private"
                    message="Only you can view this jar"
                  />
                }
              >
                <AppForm.Input
                  type="radio"
                  name="privacy"
                  id="private"
                  value="private"
                />
              </AppForm.Label>

              <AppForm.Label
                label={
                  <AccessOption
                    active="active-status"
                    type="outline"
                    icon={<LuUsers />}
                    label="Shared"
                    message="Invite others to contribute to this jar"
                  />
                }
              >
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
