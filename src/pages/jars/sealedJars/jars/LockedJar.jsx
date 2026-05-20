import React from "react";

import { getDaysLeft } from "../../../../utils/getDaysLeft";
import { getThemeIcon } from "../../../../utils/getIconTheme";
import IconContainer from "../../../../components/IconContainer";
import { getCategory } from "../../../../utils/getCategory";
import { jarThemes } from "./config/jarThemes";
import Chip from "../../../../components/Chip";
import { getPluralSuffix } from "../../../../utils/getPluralSuffix";

function LockedJar({ data, jarHasEntries }) {
  const themeIcon = getThemeIcon(data.theme);
  const themeEmoji = getCategory(data.theme, jarThemes)?.emoji;
  const themeColor = getCategory(data.theme, jarThemes)?.color;

  return (
    <div className="sealed-jar">
      <IconContainer>{themeIcon}</IconContainer>
      <Chip label={data.theme} rightIcon={themeEmoji} border />
      <div className="flex-container">
        <p className="count-container">
          <span className="count" style={{ color: themeColor }}>
            {getDaysLeft(data.locked_until)}
          </span>
          <span>
            {getPluralSuffix(getDaysLeft(data.locked_until), "day")} left
          </span>
        </p>
        <p className="count-container">
          <span className="count" style={{ color: themeColor }}>
            {!jarHasEntries ? "0" : data.jar_entries.length}
          </span>
          {console.log(data.jar_entries.length, "helooo")}
          <span>{getPluralSuffix(data.jar_entries.length, "note")} inside</span>
        </p>
      </div>
    </div>
  );
}

export default LockedJar;
