import styled from "styled-components";

import LetterCount from "./LetterCount";
import WordCount from "./WordCount";
import NewestDate from "./NewestDate";
import OldestDate from "./OldestDate";
import CommonWords from "./CommonWords";
import Loader from "../../ui/Loader";
import Message from "../../ui/Message";

import { useUser } from "../authentication/useUser";
import { useNotes } from "../../hooks/useNotes";

export interface Note {
  id: number;
  created_at: string;
  title: string;
  content: string;
}

export type NoteProps = {
  notes: Note[] | undefined;
};

const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Stat = styled.div`
  font-size: 1.8rem;
  color: var(--color-blue-300);
  font-weight: 500;
`;

export default function Stats() {
  const { user } = useUser();
  const { data, isLoading, error } = useNotes(user?.id);

  if (data?.length === 0)
    return <Message variant="regular">You don't have any notes😄</Message>;

  if (isLoading) return <Loader />;

  if (error)
    return <Message variant="regular">Something went wrong...</Message>;

  return (
    <StyledStats>
      <LetterCount notes={data} />
      <WordCount notes={data} />
      <NewestDate notes={data} />
      <OldestDate notes={data} />
      <CommonWords notes={data} />
    </StyledStats>
  );
}
