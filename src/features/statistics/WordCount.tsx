import Count from "./Count";

import { NoteProps } from "../../pages/Statistics";

export default function WordCount({ notes }: NoteProps) {
  const wordCount = notes
    ?.map((note) => note.content.split(" "))
    .reduce((acc, val) => acc + val.length, 0);

  return <Count count={wordCount}>Word count: </Count>;
}
