import React, { useState } from "react";
import Button from "../../../../components/Button";
import JarForm from "./JarForm";

function AddJar() {
  const [showAddJar, setShowAddJar] = useState(false);

  return (
    <>
      <Button label="+ New Jar" onClick={() => setShowAddJar(true)} />

      {showAddJar ? <JarForm setShowAddJar={setShowAddJar} /> : null}
    </>
  );
}

export default AddJar;
