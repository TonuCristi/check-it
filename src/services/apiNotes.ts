import { FieldValues } from "react-hook-form";
import { supabase } from "./supabase";

export async function getNotes() {
  const { data: notes, error } = await supabase.from("notes").select("*");

  if (error) {
    console.log(error);
    throw new Error("Something went wrong with getting notes");
  }

  return notes;
}

export async function getNote(id: string | undefined | null) {
  const { data: note, error } = await supabase
    .from("notes")
    .select("*")
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Something went wrong with getting your note");
  }

  return note;
}

export async function insertNote(data: FieldValues) {
  const { data: note, error } = await supabase
    .from("notes")
    .insert([{ ...data }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Something went wrong with creating your note");
  }

  console.log(note);

  return note;
}
