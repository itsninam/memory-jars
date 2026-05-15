import { supabase } from "../lib/supabase";

export const signUp = async ({ email, password, username }) => {
  const usernameExists = await checkUsernameExists(username);

  if (usernameExists) {
    throw new Error("Username already exists");
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const checkUsernameExists = async (username) => {
  const { data } = await supabase
    .from("users")
    .select("username")
    .eq("username", username)
    .maybeSingle();

  return !!data;
};

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);

  return data;
};
