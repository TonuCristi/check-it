import styled from "styled-components";
import Title from "../features/statistics/Title";

import LetterCount from "../features/statistics/LetterCount";
import Loader from "../ui/Loader";
import WordCount from "../features/statistics/WordCount";
import NewestDate from "../features/statistics/NewestDate";

import { useNotes } from "../hooks/useNotes";
import { useUser } from "../features/authentication/useUser";

interface Note {
  id: number;
  created_at: string;
  title: string;
  content: string;
}

export type NoteProps = {
  notes: Note[] | undefined;
};

const StyledStatistics = styled.div``;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Stat = styled.div`
  font-size: 1.8rem;
  color: var(--color-blue-300);
  font-weight: 500;
`;

export default function Statistics() {
  const { user } = useUser();
  const { data, isLoading, error } = useNotes(user?.id);

  return (
    <StyledStatistics>
      <Title />
      {isLoading ? (
        <Loader />
      ) : (
        <Stats>
          <LetterCount notes={data} />
          <WordCount notes={data} />
          <NewestDate notes={data} />
        </Stats>
      )}
      {error && <div>Somethng went wrong...</div>}
    </StyledStatistics>
  );
}
