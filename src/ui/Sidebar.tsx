import styled from "styled-components";
import { useForm } from "react-hook-form";

import Searchbar from "./Searchbar";
import NotesTitles from "../features/note/NotesTitles";
import Loader from "./Loader";

import { useNotes } from "../hooks/useNotes";

const StyledSidebar = styled.aside`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: var(--color-gray-900);
  overflow-y: hidden;
`;

export default function Sidebar() {
  const { data, isLoading, error } = useNotes();
  const { register, watch } = useForm();

  return (
    <StyledSidebar>
      <Searchbar register={register} />
      {isLoading ? (
        <Loader />
      ) : (
        <NotesTitles titles={data} searchValue={watch("note")} />
      )}
      {!!error && <div>Something went wrong...</div>}
    </StyledSidebar>
  );
}
