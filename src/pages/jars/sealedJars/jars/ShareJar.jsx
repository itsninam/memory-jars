import React from "react";
import AppForm from "../../../../components/AppForm";
import { useFormContext } from "react-hook-form";

function ShareJar() {
  const { watch } = useFormContext();

  const isPrivateJar = watch("privacy");

  if (isPrivateJar === "private") return null;

  return (
    <>
      <AppForm.Label label="Share with">
        <AppForm.Input type="text" name="shareWith" />
      </AppForm.Label>
      <AppForm.Error name="shareWith" />
    </>
  );
}

export default ShareJar;
