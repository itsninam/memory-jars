import React from "react";
import Card from "../../../../components/card/Card";

import { useAuth } from "../../../auth/context/AuthContext.jsx";
import { formatDate } from "../../../../utils/formatDate";
import { jarEntriesMoods } from "./config/jarEntriesMood.jsx";
import { jarThemes } from "../jars/config/jarThemes.jsx";
import { getCategory } from "../../../../utils/getCategory.jsx";

function JarEntry({ theme, entry }) {
  const { user } = useAuth();

  const createdDate = formatDate(entry.created_at);
  const themeColor = getCategory(theme, jarThemes);
  const borderColor = `2px solid ${getCategory(theme, jarThemes).color}`;
  const isAuthUser = entry.user_id === user.id;
  const userName = isAuthUser ? "You" : entry.users.username;
  const moodEmoji = getCategory(entry.mood, jarEntriesMoods)?.emoji;

  return (
    <Card>
      <Card.FlexContainer>
        <Card.Icon style={{ backgroundColor: themeColor.backgroundColor }}>
          <p>{moodEmoji}</p>
        </Card.Icon>
        <div>
          <Card.Title
            className="subtitle"
            style={{ color: isAuthUser ? themeColor.color : null }}
            title={userName}
          />
          <Card.Subtitle className="caption">{entry.mood}</Card.Subtitle>
        </div>
        <Card.Meta className="context">{createdDate}</Card.Meta>
      </Card.FlexContainer>
      <Card.Body className="entry-message" style={{ borderLeft: borderColor }}>
        {entry.entry}
      </Card.Body>
    </Card>
  );
}

export default JarEntry;
