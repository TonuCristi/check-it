import { useEffect, useState } from "react";

import { Note } from "../../pages/Statistics";

export function useCommonWords(notes: Note[] | undefined) {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    if (notes) {
      const commonWords: string[] = [];
      const allWords = notes
        ?.map((note) => note.content.split("\n").join(" ").split(" "))
        .flatMap((note) => note);

      const uniqueWords = allWords?.filter(
        (word, i) => allWords.indexOf(word) === i
      );

      const countPass =
        allWords && notes
          ? Math.trunc(allWords?.length % notes?.length) + 1
          : 0;

      let count = 0;
      for (let i = 0; i < uniqueWords.length; i++) {
        for (let j = 0; j < allWords.length; j++) {
          if (uniqueWords[i] === allWords[j]) {
            count++;
          }
        }
        if (count >= countPass) {
          commonWords.push(uniqueWords[i]);
          count = 0;
        } else {
          count = 0;
        }
      }

      setWords(commonWords);
    }
  }, [notes]);

  return { words };
}
