import React from "react";
import UserAvatar from "../../../../components/UserAvatar";
import { getUserColor } from "../../../../utils/getUserColor";

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
        Shared with {user.length} {user.length > 1 ? "people" : "person"}
      </p>
      {actions ? actions : null}
    </div>
  );
}

export default UserIcon;
