import styled from "styled-components";

import NoteTitle from "./NoteTitle";
import NotesMessage from "./NotesMessage";

export interface Title {
  id: number;
  title: string;
  content: string;
}

type Props = {
  titles: Title[] | undefined;
  searchValue: string;
};

const Scroll = styled.div`
  height: 75rem;
  overflow-y: scroll;
  padding-right: 1.2rem;

  &::-webkit-scrollbar {
    background: var(--color-violet-100);
    width: 1rem;
    border-radius: 1.9rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-violet-400);
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

export default function NotesTitles({ titles, searchValue }: Props) {
  if (!titles?.length) return <NotesMessage />;

  return (
    <Scroll>
      <StyledNotesTitles>
        {titles
          .filter(({ title }) =>
            title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((title, i) => (
            <NoteTitle key={title.id} index={i + 1} title={title} />
          ))}
      </StyledNotesTitles>
    </Scroll>
  );
}
