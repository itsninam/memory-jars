import { LuChevronRight, LuLock, LuUsers } from "react-icons/lu";
import IconLabel from "../../../../components/IconLabel";
import UserIcon from "./UserIcon";
import AccessOption from "../../../../components/AccessOption";

function Access({ user, isLockedJar }) {
  const handleShowMembers = () => {
    console.log(user);
  };

  if (user.length === 0)
    return (
      <>
        {isLockedJar ? (
          <AccessOption
            type="divider"
            icon={<LuLock />}
            label="Private"
            message="Only you can view this jar"
          />
        ) : (
          <IconLabel
            icon={<LuLock />}
            label="Private"
            className="private caption"
          />
        )}
      </>
    );

  const firstThreeUsers = user.slice(0, 3);

  const remainingUsers = user.length - 3;

  if (remainingUsers > 0)
    return (
      <>
        {isLockedJar ? (
          <UserIcon
            firstThreeUsers={firstThreeUsers}
            remainingUsers={remainingUsers}
            user={user}
          />
        ) : (
          <IconLabel
            icon={<LuUsers />}
            label={`Shared with ${firstThreeUsers.join(", ")} +${remainingUsers} others`}
            className="caption"
          />
        )}
      </>
    );

  return (
    <>
      {isLockedJar ? (
        <UserIcon
          firstThreeUsers={firstThreeUsers}
          user={user}
          actions={
            <LuChevronRight
              onClick={handleShowMembers}
              className="chevron-right"
            />
          }
        />
      ) : (
        <IconLabel
          icon={<LuUsers />}
          label={`Shared with ${user.join(", ")}`}
          className="caption"
        />
      )}
    </>
  );
}

export default Access;
