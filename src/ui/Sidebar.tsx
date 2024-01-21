import styled from "styled-components";

import Searchbar from "./Searchbar";
import NotesTitles from "./NotesTitles";
import Loader from "./Loader";

import { useNotes } from "../hooks/useNotes";

const StyledSidebar = styled.aside`
  border-right: var(--border-violet-sm);
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export default function Sidebar() {
  const { data, isLoading, error } = useNotes();

  return (
    <StyledSidebar>
      <Searchbar />
      {isLoading ? <Loader /> : <NotesTitles titles={data} />}
      {!!error && <div>Something went wrong...</div>}
    </StyledSidebar>
  );
}
