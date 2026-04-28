import React from "react";
import AppForm from "../../components/AppForm";
import Button from "../../components/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "./hooks/useLogin";

function Login() {
  const { login, isPending, error } = useLogin();
  const navigate = useNavigate();

  const onSubmit = (data, { reset }) => {
    login(
      { email: data.email, password: data.password },
      {
        onSuccess: () => {
          reset();
          navigate("/home");
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
        label={isPending ? "Login..." : "Login"}
        disabled={isPending}
      />

      <AppForm.Message message="don't have an account?">
        <Link to="/signup">Signup</Link>
      </AppForm.Message>
    </AppForm>
  );
}

export default Login;
