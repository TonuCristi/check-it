import styled from "styled-components";

import NoteTitle from "./NoteTitle";
import NotesMessage from "./NotesMessage";
import Loader from "../../ui/Loader";

import { useNotes } from "../../hooks/useNotes";

export interface Title {
  id: number;
  title: string;
  content: string;
}

type Props = {
  searchValue: string;
};

const Scroll = styled.div`
  overflow-y: auto;
  padding-right: 1.2rem;

  &::-webkit-scrollbar {
    background: var(--color-blue-100);
    width: 1rem;
    border-radius: 1.9rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-blue-400);
    border-radius: 1.9rem;
  }
`;

const StyledNotesTitles = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export default function NotesTitles({ searchValue }: Props) {
  const { data, isLoading, error } = useNotes();

  if (!data && isLoading) return <Loader />;

  if (error) return <div>Something went wrong...</div>;

  if (!data?.length)
    return (
      <StyledNotesTitles>
        <NotesMessage />
      </StyledNotesTitles>
    );

  return (
    <Scroll>
      <StyledNotesTitles>
        {/* {data
          .filter(({ title }) =>
            title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((title, i) => (
            <NoteTitle key={title.id} index={i + 1} title={title} />
          ))} */}
      </StyledNotesTitles>
    </Scroll>
  );
}
