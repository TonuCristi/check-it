import { NoteProps, Stat } from "./Stats";

import { useCommonWords } from "./useCommonWords";

export default function CommonWords({ notes }: NoteProps) {
  const { words } = useCommonWords(notes);

  return (
    <Stat>Common words: {words.length > 1 ? words.join(", ") : words[0]}</Stat>
  );
}
