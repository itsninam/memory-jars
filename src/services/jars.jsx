import { supabase } from "../lib/supabase";

export const getJars = async (userId) => {
  const { data, error } = await supabase
    .from("jar_members")
    .select(
      `
      id,
      jars (
        id,
        title,
        theme,
        locked_until,
        jar_entries(*),
        jar_members (
          user_id,
          users (
            username
          )
        )
      )
    `,
    )
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return data;
};

export const getJarEntries = async (jarId) => {
  const { data, error } = await supabase
    .from("jars")
    .select(
      `
      *, 
      users(username),
      jar_entries(*, 
        users(username)
      ),
      jar_members(
        *,
        users(username)
      )
    `,
    )
    .eq("id", jarId)
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const createJarEntry = async ({ jarId, entry, userId, mood }) => {
  const { error } = await supabase
    .from("jar_entries")
    .insert({ jar_id: jarId, entry: entry, user_id: userId, mood: mood });

  if (error) throw new Error(error.message);
};

export const createJar = async ({
  createdBy,
  lockedUntil,
  theme,
  title,
  sharedWith,
}) => {
  const sharedWithUser = sharedWith ? await getSharedUser(sharedWith) : null;

  if (sharedWith && !sharedWithUser) {
    throw new Error("User does not exist");
  }

  const { data, error } = await supabase
    .from("jars")
    .insert({
      created_by: createdBy,
      locked_until: lockedUntil,
      theme: theme,
      title: title,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);

  await createJarMembers(data, sharedWithUser);
};

const getSharedUser = async (users) => {
  const { data } = await supabase
    .from("users")
    .select("user_id, username")
    .in("username", users);

  const foundUsernames = data.map((u) => u.username);

  const missing = users.filter((name) => !foundUsernames.includes(name));

  if (missing.length) {
    throw new Error(`${missing.join(", ")} does not exist`);
  }

  return data;
};

export const createJarMembers = async (data, sharedWithUser) => {
  const jarMembers = [
    {
      jar_id: data.id,
      user_id: data.created_by,
      role: "owner",
    },
  ];

  if (sharedWithUser !== null) {
    const newMembers = sharedWithUser.map((user) => ({
      jar_id: data.id,
      user_id: user.user_id,
      role: "editor",
    }));

    jarMembers.push(...newMembers);
  }

  const { error } = await supabase.from("jar_members").insert(jarMembers);

  if (error) throw new Error(error.message);
};

export const addJarMembers = async ({ jarId, usernames }) => {
  const users = await getSharedUser(usernames);
  const inserts = users.map((user) => ({
    jar_id: jarId,
    user_id: user.user_id,
    role: "editor",
  }));

  const { error } = await supabase.from("jar_members").insert(inserts);

  if (error?.code === "23505") {
    throw new Error("One or more users are already members of this jar");
  }

  if (error) throw new Error(error.message);
};
