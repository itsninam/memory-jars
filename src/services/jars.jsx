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
      )
      `,
    )
    .eq("id", jarId)
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const addJarEntry = async ({ jarId, entry, userId }) => {
  const { error } = await supabase
    .from("jar_entries")
    .insert({ jar_id: jarId, entry: entry, user_id: userId });

  if (error) throw new Error(error.message);
};

export const addJar = async ({
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

  await addJarMembers(data, sharedWithUser);
};

const getSharedUser = async (user) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", user)
    .maybeSingle();

  if (error) throw new Error(error.message);

  return data;
};

const addJarMembers = async (data, sharedWithUser) => {
  const jarMembers = [
    {
      jar_id: data.id,
      user_id: data.created_by,
      role: "owner",
    },
  ];

  if (sharedWithUser !== null) {
    jarMembers.push({
      jar_id: data.id,
      user_id: sharedWithUser.user_id,
      role: "editor",
    });
  }

  const { error } = await supabase.from("jar_members").insert(jarMembers);

  if (error) throw new Error(error.message);
};
