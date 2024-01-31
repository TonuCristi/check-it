import NoteDate from "./NoteDate";

import { NoteProps } from "./Stats";

export default function OldestDate({ notes }: NoteProps) {
  const newestDate = notes
    ?.map((note) => new Date(note.created_at).getTime())
    .sort((a, b) => a - b)
    .map((date) => {
      const data = new Date(date);
      return `${data.toLocaleDateString()} ${data.toLocaleTimeString()}`;
    });

  return (
    <NoteDate date={newestDate?.[newestDate.length - 1]}>Oldest note:</NoteDate>
  );
}
