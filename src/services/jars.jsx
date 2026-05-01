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
