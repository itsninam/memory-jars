import React from "react";
import { getPluralSuffix } from "../../../../utils/getPluralSuffix";

function JarIndicators({ themeColor, count, label, method, suffix }) {
  return (
    <p className="count-container">
      <span className="count" style={{ color: themeColor }}>
        {count}
      </span>
      <span>
        {getPluralSuffix(method, suffix)} {label}
      </span>
    </p>
  );
}

export default JarIndicators;
