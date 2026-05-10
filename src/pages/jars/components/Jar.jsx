import React from "react";
import CardItem from "../../../components/card/CardItem";

import { LuClock3, LuLock, LuUsers } from "react-icons/lu";
import { formatDate } from "../../../utils/formatDate";
import { Link } from "react-router-dom";

function Jar({ children, id }) {
  return (
    <CardItem>
      <Link to={`${id}`}>{children}</Link>
    </CardItem>
  );
}

function Title({ title }) {
  return <h2>{title}</h2>;
}

function Theme({ theme, color }) {
  return <p style={{ color: color }}>{theme}</p>;
}

function Sharing({ user }) {
  if (user.length === 0)
    return (
      <p className="private">
        <LuLock />
        Private
      </p>
    );

  const firstThreeUsers = user.slice(0, 3);

  const remainingUsers = user.length - 3;

  if (remainingUsers > 0)
    return (
      <p>
        <LuUsers />
        Shared with {firstThreeUsers.join(", ")} and {remainingUsers} others
      </p>
    );

  return (
    <p>
      <LuUsers />
      Shared with {user.join(", ")}
    </p>
  );
}

function Expiry({ date }) {
  return (
    <p>
      <LuClock3 />
      Locked until {formatDate(date)}
    </p>
  );
}

function Icon({ icon }) {
  return <>{icon}</>;
}

function Entries({ jar }) {
  return (
    <>
      {jar.entries ? <p className="entries">{`${jar.entries} notes`}</p> : null}
    </>
  );
}

Jar.Title = Title;
Jar.Sharing = Sharing;
Jar.Theme = Theme;
Jar.Expiry = Expiry;
Jar.Icon = Icon;
Jar.Entries = Entries;

export default Jar;
