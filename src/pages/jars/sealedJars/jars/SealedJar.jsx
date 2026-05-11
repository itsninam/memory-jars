import React, { Fragment } from "react";
import Card from "../../../../components/card/Card";

import { getThemeIcon, getThemeIconObj } from "../../../../utils/getIconTheme";
import { LuClock3, LuLock, LuUsers } from "react-icons/lu";
import { formatDate } from "../../../../utils/formatDate";

function SealedJar({ jar }) {
  const themeIcon = getThemeIcon(jar.theme);
  const themeColor = getThemeIconObj(jar.theme).color;
  const lockedDate = formatDate(jar.expiry);
  const entriesText = jar.entries > 0 ? `${jar.entries} notes` : null;

  return (
    <Card>
      <Card.Navigation navigateTo={`${jar.theme}/${jar.jar_id}`}>
        <Card.FlexContainer>
          <Card.Icon>{themeIcon}</Card.Icon>
          <div>
            <Card.Title title={jar.title} />
            <Card.Subtitle style={{ color: themeColor }}>
              {jar.theme}
            </Card.Subtitle>
            <Card.Meta>
              <Access user={jar.users} />
            </Card.Meta>
            <Card.Meta>
              <LuClock3 />
              Sealed until {lockedDate}
            </Card.Meta>
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
      <span className="private">
        <LuLock /> Private
      </span>
    );

  const firstThreeUsers = user.slice(0, 3);

  const remainingUsers = user.length - 3;

  if (remainingUsers > 0)
    return (
      <>
        <LuUsers />
        Shared with {firstThreeUsers.join(", ")} and {remainingUsers} others
      </>
    );

  return (
    <>
      <LuUsers />
      Shared with {user.join(", ")}
    </>
  );
}

export default React.memo(SealedJar);
