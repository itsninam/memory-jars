import React from "react";

function Button({ type, label, disabled, onClick }) {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
