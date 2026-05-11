import React from "react";
import Card from "../../../../components/card/Card";

import { useAuth } from "../../../auth/context/AuthContext.jsx";
import { formatDate } from "../../../../utils/formatDate";
import { getThemeIconObj } from "../../../../utils/getIconTheme";

function JarEntry({ theme, entry }) {
  const { user } = useAuth();
  const createdDate = formatDate(entry.created_at);
  const themeColor = getThemeIconObj(theme);
  const borderColor = `2px solid ${getThemeIconObj(theme).color}`;

  const isAuthUser = entry.user_id === user.id;
  const userName = isAuthUser ? "You" : entry.users.username;

  return (
    <Card>
      <Card.FlexContainer>
        <Card.Icon style={{ backgroundColor: themeColor.backgroundColor }}>
          <p>😄</p>
        </Card.Icon>
        <div>
          <Card.Title
            style={{ color: isAuthUser ? themeColor.color : null }}
            title={userName}
          />
          <Card.Meta>mood</Card.Meta>
        </div>
        <Card.Meta className="context">{createdDate}</Card.Meta>
      </Card.FlexContainer>
      <Card.Meta className="entry-message" style={{ borderLeft: borderColor }}>
        {entry.entry}
      </Card.Meta>
    </Card>
  );
}

export default JarEntry;
