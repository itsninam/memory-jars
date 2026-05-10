import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

function AppForm({ children, onHandleSubmit, defaultValues }) {
  const methods = useForm({ defaultValues });

  const wrappedSubmit = (data) => {
    onHandleSubmit(data, { reset: methods.reset });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(wrappedSubmit)}>{children}</form>
    </FormProvider>
  );
}

function Input({ type, name, errorMessage, min, id, value }) {
  const { register } = useFormContext();

  return (
    <input
      type={type}
      min={min}
      id={id}
      {...(value !== undefined ? { value } : {})}
      {...register(name, { required: errorMessage })}
    />
  );
}

function Error({ name }) {
  const {
    formState: { errors },
  } = useFormContext();

  if (!errors?.[name]) return null;

  return <p className="error">{errors[name].message}</p>;
}

function Label({ label, children, className }) {
  return (
    <label className={className}>
      {label} {children}
    </label>
  );
}

function Message({ message, children }) {
  return (
    <p>
      {message} {children}
    </p>
  );
}

function Footer({ children }) {
  return <footer>{children}</footer>;
}

function Header({ header }) {
  return <h2>{header}</h2>;
}

function FlexContainer({ children }) {
  return <div className="flex-container">{children}</div>;
}

function FormField({ children }) {
  return <div className="form-field">{children}</div>;
}

AppForm.Input = Input;
AppForm.Label = Label;
AppForm.Error = Error;
AppForm.Message = Message;
AppForm.Footer = Footer;
AppForm.Header = Header;
AppForm.FlexContainer = FlexContainer;
AppForm.FormField = FormField;

export default AppForm;
