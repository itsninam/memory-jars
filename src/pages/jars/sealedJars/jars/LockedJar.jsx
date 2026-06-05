import React, { useState } from "react";
import Chip from "../../../../components/Chip";
import IconContainer from "../../../../components/IconContainer";
import Button from "../../../../components/Button";
import AddJarMembers from "./AddJarMembers";

import JarIndicators from "./JarIndicators";
import JarAccess from "../jars/JarAccess";
import { getDaysLeft } from "../../../../utils/getDaysLeft";
import { getThemeIcon } from "../../../../utils/getIconTheme";
import { getCategory } from "../../../../utils/getCategory";
import { jarThemes } from "./config/jarThemes";
import { useAuth } from "../../../auth/context/AuthContext";
import { getSharedusers } from "../../../../utils/getSharedUsers";

function LockedJar({ data, jarHasEntries }) {
  const { user } = useAuth();
  const themeIcon = getThemeIcon(data.theme);
  const themeEmoji = getCategory(data.theme, jarThemes)?.emoji;
  const themeColor = getCategory(data.theme, jarThemes)?.color;
  const users = getSharedusers(data.jar_members, user.id);
  const [showAddUser, setShowAddUser] = useState(false);

  return (
    <div className="sealed-jar">
      <IconContainer>{themeIcon}</IconContainer>
      <Chip label={data.theme} rightIcon={themeEmoji} />
      <div className="flex-container">
        <JarIndicators
          themeColor={themeColor}
          count={getDaysLeft(data.locked_until)}
          method={getDaysLeft(data.locked_until)}
          suffix="day"
          label="left"
        />
        <JarIndicators
          themeColor={themeColor}
          count={!jarHasEntries ? "0" : data.jar_entries.length}
          method={data.jar_entries.length}
          suffix="note"
          label="inside"
        />
      </div>
      <JarAccess user={users} isLockedJar={true} />
      <Button
        leftIcon="+"
        className="secondary"
        label="Add members"
        onClick={() => setShowAddUser(true)}
      />

      {showAddUser ? (
        <AddJarMembers
          setShowAddUser={setShowAddUser}
          showAddUser={showAddUser}
          jarData={data}
        />
      ) : null}
    </div>
  );
}

export default LockedJar;
