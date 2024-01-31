import Count from "./Count";
import { NoteProps } from "./Stats";

export default function LetterCount({ notes }: NoteProps) {
  const letterCount = notes
    ?.map((note) => note.content.replaceAll("\n", "").split(" ").join(""))
    .reduce((acc, val) => acc + val.length, 0);

  return <Count count={letterCount}>Letters:</Count>;
}
