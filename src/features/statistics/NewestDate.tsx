import NoteDate from "./NoteDate";

import { NoteProps } from "./Stats";

export default function NewestDate({ notes }: NoteProps) {
  const newestDate = notes
    ?.map((note) => new Date(note.created_at).getTime())
    .sort((a, b) => a - b)
    .map((date) => {
      const data = new Date(date);
      return `${data.toLocaleDateString()} ${data.toLocaleTimeString()}`;
    });

  return <NoteDate date={newestDate?.[0]}>Newest note:</NoteDate>;
}
