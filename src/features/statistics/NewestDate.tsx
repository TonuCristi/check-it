import NoteDate from "./NoteDate";

import { NoteProps } from "../../pages/Statistics";

export default function NewestDate({ notes }: NoteProps) {
  const newestDate = notes?.map((note) => {
    const date = new Date(note.created_at);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  });
  //   console.log(newestDate);

  return <NoteDate date={"aaa"}>Newest note: </NoteDate>;
}
