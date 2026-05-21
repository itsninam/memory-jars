import React from "react";
import Card from "../../../../components/card/Card";
import IconLabel from "../../../../components/IconLabel";

import { getThemeIcon } from "../../../../utils/getIconTheme";
import { LuClock3, LuLock, LuUsers } from "react-icons/lu";
import { formatDate } from "../../../../utils/formatDate";
import { getCategory } from "../../../../utils/getCategory";
import { jarThemes } from "./config/jarThemes";
import { getPluralSuffix } from "../../../../utils/getPluralSuffix";

function Jar({ jar, sealed }) {
  const themeIcon = getThemeIcon(jar.theme);
  const themeColor = getCategory(jar.theme, jarThemes).color;
  const lockedDate = formatDate(jar.expiry);
  const entriesText =
    jar.entries > 0
      ? `${jar.entries} ${getPluralSuffix(jar.entries, "note")}`
      : null;

  return (
    <Card>
      <Card.Navigation navigateTo={`${jar.theme}/${jar.jar_id}`}>
        <Card.FlexContainer>
          <Card.Icon>{themeIcon}</Card.Icon>
          <div>
            <Card.Title title={jar.title} className="title" />
            <Card.Subtitle style={{ color: themeColor }} className="caption">
              {jar.theme}
            </Card.Subtitle>
            <Access user={jar.users} />
            <IconLabel
              label={`${sealed ? "Sealed until" : "Unsealed on"} ${lockedDate}`}
              icon={<LuClock3 />}
              className="caption"
            />
          </div>
          {entriesText && (
            <Card.Meta className="context">{entriesText}</Card.Meta>
          )}
        </Card.FlexContainer>
      </Card.Navigation>
    </Card>
  );
}

function Access({ user }) {
  if (user.length === 0)
    return (
      <IconLabel
        icon={<LuLock />}
        label="Private"
        className="private caption"
      />
    );

  const firstThreeUsers = user.slice(0, 3);

  const remainingUsers = user.length - 3;

  if (remainingUsers > 0)
    return (
      <IconLabel
        icon={<LuUsers />}
        label={`Shared with ${firstThreeUsers.join(", ")} and ${remainingUsers} others`}
        className="caption"
      />
    );

  return (
    <IconLabel
      icon={<LuUsers />}
      label={`Shared with ${user.join(", ")}`}
      className="caption"
    />
  );
}

export default React.memo(Jar);
