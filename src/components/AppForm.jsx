import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

function AppForm({ children, onHandleSubmit, defaultValues, className, ref }) {
  const methods = useForm({ defaultValues });

  const wrappedSubmit = (data) => {
    onHandleSubmit(data, { reset: methods.reset });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(wrappedSubmit)}
        className={className}
        ref={ref}
      >
        {children}
      </form>
    </FormProvider>
  );
}

function Input({
  type,
  name,
  errorMessage,
  min,
  id,
  value,
  onKeyDown,
  placeholder,
}) {
  const { register } = useFormContext();

  return (
    <input
      type={type}
      min={min}
      id={id}
      {...(value !== undefined ? { value } : {})}
      {...register(name, { required: errorMessage })}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
}

function TextArea({ id, name, rows, cols, errorMessage }) {
  const { register } = useFormContext();

  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      cols={cols}
      {...register(name, { required: errorMessage })}
    ></textarea>
  );
}

function Error({ name }) {
  const {
    formState: { errors },
  } = useFormContext();

  if (!errors?.[name]) return null;

  return (
    <p className="error">{errors[name].message || errors[name].root.message}</p>
  );
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
    <p className="caption message">
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
AppForm.TextArea = TextArea;

export default AppForm;
