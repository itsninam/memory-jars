import React, { createContext, useContext } from "react";
import { useForm } from "react-hook-form";

const AppFormContext = createContext(null);

export const useAppFormContext = () => {
  const context = useContext(AppFormContext);
  if (!context) {
    throw new Error("useAppFormContext must be used within a Provider");
  }
  return context;
};

function AppForm({ children, onHandleSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const wrappedSubmit = (data) => {
    onHandleSubmit(data, { reset });
  };

  return (
    <AppFormContext.Provider value={{ register, handleSubmit, errors, reset }}>
      <form onSubmit={handleSubmit(wrappedSubmit)}>{children}</form>
    </AppFormContext.Provider>
  );
}

function Input({ type, name, errorMessage, min }) {
  const { register, errors } = useAppFormContext();

  return (
    <>
      <input
        min={min}
        type={type}
        {...register(name, { required: errorMessage })}
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </>
  );
}

function Label({ label }) {
  return <label>{label}</label>;
}

function Message({ message, children }) {
  return (
    <p>
      {message} {children}
    </p>
  );
}

AppForm.Input = Input;
AppForm.Label = Label;
AppForm.Message = Message;

export default AppForm;
