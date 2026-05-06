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
