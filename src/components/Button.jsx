import React from "react";

function Button({ type, label, disabled }) {
  return (
    <button type={type} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
