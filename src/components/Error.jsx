import React from "react";

function Error({ message, className }) {
  return <p className={`error-message ${className ?? ""}`}>{message}</p>;
}

export default Error;
