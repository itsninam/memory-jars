import React from "react";

function Button({
  type,
  label,
  disabled,
  onClick,
  className,
  leftIcon,
  rightIcon,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span>{label}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}

export default Button;
