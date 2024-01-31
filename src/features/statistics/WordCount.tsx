import Count from "./Count";

import { NoteProps } from "./Stats";

export default function WordCount({ notes }: NoteProps) {
  const wordCount = notes
    ?.map((note) =>
      note.content
        .replaceAll("\n", " ")
        .split(" ")
        .filter((word) => word.length > 0)
    )
    .reduce((acc, val) => acc + val.length, 0);

  return <Count count={wordCount}>Words: </Count>;
}
