import React from "react";
import Jar from "../../components/Jar";

import { getIconColor, getIconTheme } from "../../../../utils/getIconTheme";

function SealedJar({ jar }) {
  return (
    <Jar id={jar.jar_id}>
      <div className="flex-container">
        <Jar.Icon icon={getIconTheme(jar.theme)} className={jar.theme} />
        <div>
          <Jar.Title title={jar.title} />
          <Jar.Theme theme={jar.theme} color={getIconColor(jar.theme)} />
          <Jar.Sharing user={jar.users} />
          <Jar.Expiry date={jar.expiry} />
        </div>
        <Jar.Entries jar={jar} />
      </div>
    </Jar>
  );
}

export default React.memo(SealedJar);
