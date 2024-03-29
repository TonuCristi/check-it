import styled from "styled-components";
import { useForm } from "react-hook-form";

import Searchbar from "./Searchbar";
import NotesTitles from "../features/note/NotesTitles";

const StyledSidebar = styled.aside`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow-y: hidden;
  border-right: var(--border-blue-sm);
`;

export default function Sidebar() {
  const { register, watch } = useForm({
    defaultValues: {
      note: "",
    },
  });

  return (
    <StyledSidebar>
      <Searchbar register={register} />
      <NotesTitles searchValue={watch("note")} />
    </StyledSidebar>
  );
}
