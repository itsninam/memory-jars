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
    <AppForm onHandleSubmit={onSubmit} className="auth-form">
      <AppForm.Header header="Sign up" />

      <AppForm.FormField>
        <AppForm.Label label="Enter your email" />
        <AppForm.Input
          type="email"
          name="email"
          errorMessage="Email is required"
        />
        <AppForm.Error name="email" />
      </AppForm.FormField>

      <AppForm.FormField>
        <AppForm.Label label="Enter your password" />
        <AppForm.Input
          type="password"
          name="password"
          errorMessage="Password is required"
        />
        <AppForm.Error name="password" />
      </AppForm.FormField>

      <AppForm.Footer>
        <Button
          type="submit"
          label={isPending ? "Signup..." : "Signup"}
          disabled={isPending}
          className="primary"
        />
      </AppForm.Footer>

      <AppForm.Message message="Already have an account?">
        <Link to="/">Login</Link>
      </AppForm.Message>
    </AppForm>
  );
}

export default Signup;
