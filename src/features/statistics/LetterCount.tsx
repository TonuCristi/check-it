import Count from "./Count";

import { NoteProps } from "../../pages/Statistics";

export default function LetterCount({ notes }: NoteProps) {
  const letterCount = notes
    ?.map((note) => note.content.split(" ").join(""))
    .reduce((acc, val) => acc + val.length, 0);

  return <Count count={letterCount}>Letter count:</Count>;
}
