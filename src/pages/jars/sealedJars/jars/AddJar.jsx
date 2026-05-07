import React, { useState } from "react";
import Button from "../../../../components/Button";
import NewJarForm from "./NewJarForm";

function AddJar() {
  const [showAddJar, setShowAddJar] = useState(false);

  return (
    <>
      <Button
        leftIcon="+"
        label="New Jar"
        onClick={() => setShowAddJar(true)}
        className="primary"
      />

      <NewJarForm setShowAddJar={setShowAddJar} showAddJar={showAddJar} />
    </>
  );
}

export default AddJar;
