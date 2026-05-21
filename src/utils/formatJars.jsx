export const formatJars = (jars, id) => {
  return jars.map((item) => {
    const sharedUsers = item.jar_members
      .filter((member) => member.user_id !== id)
      .map((member) => member.users?.username);

    return {
      id: item.id,
      title: item.title,
      users: sharedUsers,
      theme: item.theme,
      expiry: item.locked_until,
      jar_id: item.id,
      entries: item.jar_entries.length,
    };
  });
};
