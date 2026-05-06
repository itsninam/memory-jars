import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function GoBack() {
  const navigate = useNavigate();

  return <Button label="<" onClick={() => navigate(-1)} />;
}

export default GoBack;
