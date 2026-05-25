export const getSharedusers = (data, id) => {
  return data
    .filter((member) => member.user_id !== id)
    .map((member) => member.users?.username);
};
