import { supabase } from "./supabase";
import { FieldValues } from "react-hook-form";

export async function createUser({ email, fullName, password }: FieldValues) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        fullName: fullName,
        age: 27,
      },
    },
  });

  if (error) {
    console.log(error);
    throw new Error("Something went wrong with creating your acccount");
  }

  return data;
}

export async function loginUser({ email, password }: FieldValues) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.log(error);
    throw new Error("Something went wrong with signing in");
  }

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.log(error);
    throw new Error("Something went wrong with getting the user");
  }

  return user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
