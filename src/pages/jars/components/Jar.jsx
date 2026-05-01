import React from "react";
import { formatDate } from "../../../utils/formatDate";

function Jar({ children }) {
  return <li>{children}</li>;
}

function Title({ title }) {
  return <h2>{title}</h2>;
}

function Theme({ theme }) {
  return <p>{theme}</p>;
}

function Sharing({ user }) {
  if (user.length === 0) return <p>private</p>;

  const firstThreeUsers = user.slice(0, 3);

  const remainingUsers = user.length - 3;

  if (remainingUsers > 0)
    return (
      <p>
        shared with {firstThreeUsers.join(", ")} and {remainingUsers} others
      </p>
    );

  return <p>shared with {user.join(", ")}</p>;
}

function Expiry({ date }) {
  return <p>⏳ {formatDate(date)}</p>;
}

Jar.Title = Title;
Jar.Sharing = Sharing;
Jar.Theme = Theme;
Jar.Expiry = Expiry;

export default Jar;
