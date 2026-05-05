import React from "react";
import AppForm from "../../components/AppForm";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "./hooks/useSignUp";

function Signup() {
  const { signUp, isPending } = useSignUp();
  const navigate = useNavigate();

  const onSubmit = (data, { reset }) => {
    signUp(
      { email: data.email, password: data.password },
      {
        onSuccess: () => {
          reset();
          navigate("/");
        },
      },
    );
  };

  return (
    <AppForm onHandleSubmit={onSubmit}>
      <AppForm.Label label="Enter your email" />
      <AppForm.Input
        type="email"
        name="email"
        errorMessage="Email is required"
      />
      <AppForm.Label label="Enter your password" />
      <AppForm.Input
        type="password"
        name="password"
        errorMessage="Password is required"
      />
      <Button
        type="submit"
        label={isPending ? "Signup..." : "Signup"}
        disabled={isPending}
      />

      <AppForm.Message message="already have an account?">
        <Link to="/">Login</Link>
      </AppForm.Message>
    </AppForm>
  );
}

export default Signup;
