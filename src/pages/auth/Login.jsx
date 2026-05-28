import React from "react";
import AppForm from "../../components/AppForm";
import Button from "../../components/Button";
import Error from "../../components/Error";

import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "./hooks/useLogin";

function Login() {
  const { login, isPending, isError, error } = useLogin();
  const navigate = useNavigate();

  const onSubmit = (data, { reset }) => {
    login(
      { email: data.email.trim().toLowerCase(), password: data.password },
      {
        onSuccess: () => {
          reset();
          navigate("/home");
        },
      },
    );
  };

  return (
    <AppForm onHandleSubmit={onSubmit} className="auth-form">
      <AppForm.Header header="Login" />

      {isError ? <Error message={error.message} className="caption" /> : null}

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
          label={isPending ? "Login..." : "Login"}
          disabled={isPending}
          className="primary"
        />
      </AppForm.Footer>

      <AppForm.Message message="Don't have an account?">
        <Link to="/signup">Signup</Link>
      </AppForm.Message>
    </AppForm>
  );
}

export default Login;
