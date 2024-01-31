import { FieldValues } from "react-hook-form";
import { supabase } from "./supabase";

export interface Note {
  id: string | undefined;
  created_at: string;
  title: string;
  content: string;
}

export async function getNotes(id: string | undefined) {
  const { data: notes, error } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", id);

  if (error) {
    throw new Error(error.message);
  }

  return notes;
}

export async function getNote(id: string | undefined | null) {
  const { data: note, error } = await supabase
    .from("notes")
    .select("*")
    .eq("id", id);

  if (error || !id) {
    throw new Error(error?.message);
  }

  return note;
}

export async function insertNote(data: FieldValues) {
  const { data: note, error } = await supabase
    .from("notes")
    .insert([{ ...data }])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return note;
}

export async function updateNote(updatedNote: Note) {
  const { error } = await supabase
    .from("notes")
    .update({
      ...updatedNote,
      title: updatedNote.title,
      content: updatedNote.content,
    })
    .eq("id", updatedNote.id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function removeNote(id: number) {
  const { error } = await supabase.from("notes").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
