import React from "react";
import UserAvatar from "../../../../components/UserAvatar";
import { getUserColor } from "../../../../utils/getUserColor";
import { getPluralSuffix } from "../../../../utils/getPluralSuffix";

function UserIcon({ firstThreeUsers, remainingUsers, user, actions }) {
  const getInitial = (name) => {
    return name[0].toUpperCase();
  };

  return (
    <div className="access-container">
      <UserAvatar background={getUserColor("You")}>You</UserAvatar>
      {firstThreeUsers.map((item) => (
        <UserAvatar key={item} background={getUserColor(item)}>
          {getInitial(item)}
        </UserAvatar>
      ))}
      {remainingUsers ? `+${remainingUsers}` : null}
      <p className="caption sharing">
        You and {user.length} {getPluralSuffix(user.length, "other")}
      </p>
      {actions ? actions : null}
    </div>
  );
}

export default UserIcon;
