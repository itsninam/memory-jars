import React from "react";

function Button({ type, label, disabled, onClick, className, leftIcon }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span>{label}</span>
    </button>
  );
}

export default Button;
