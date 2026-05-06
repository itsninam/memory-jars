import React from "react";
import Jar from "../../components/Jar";

function SealedJar({ jar }) {
  return (
    <Jar id={jar.jar_id}>
      <Jar.Title title={jar.title} />
      <Jar.Theme theme={jar.theme} />
      <Jar.Sharing user={jar.users} />
      <Jar.Expiry date={jar.expiry} />
    </Jar>
  );
}

export default React.memo(SealedJar);
