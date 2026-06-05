import React from "react";
import AppForm from "../../components/AppForm";
import Button from "../../components/Button";
import ErrorMessage from "../../components/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "./hooks/useSignUp";

function Signup() {
  const { signUp, isPending, isError, error } = useSignUp();
  const navigate = useNavigate();

  const onSubmit = (data, { reset }) => {
    signUp(
      {
        email: data.email.trim().toLowerCase(),
        password: data.password,
        username: data.username.trim().toLowerCase(),
      },
      {
        onSuccess: () => {
          reset();
          navigate("/login");
        },
      },
    );
  };

  return (
    <AppForm onHandleSubmit={onSubmit} className="auth-form">
      <AppForm.Header header="Sign up" />

      {isError ? (
        <ErrorMessage message={error.message} className="caption" />
      ) : null}

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
        <AppForm.Label label="Enter a username" />
        <AppForm.Input
          type="username"
          name="username"
          errorMessage="Username is required"
        />
        <AppForm.Error name="email" />
      </AppForm.FormField>

      <AppForm.FormField>
        <AppForm.Label label="Enter a password" />
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
        <Link to="/login">Login</Link>
      </AppForm.Message>
    </AppForm>
  );
}

export default Signup;
