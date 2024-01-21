import { supabase } from "./supabase";

export async function getNotes() {
  const { data: notes, error } = await supabase.from("notes").select("*");

  if (error) {
    console.log(error);
    throw new Error("Something went wrong with getting notes");
  }

  return notes;
}
