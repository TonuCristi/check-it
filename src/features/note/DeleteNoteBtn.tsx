import { HiOutlineXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useDeleteNote } from "./useDeleteNote";
import { MouseEvent } from "react";

const StyledDeleteNoteBtn = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.4rem;
  margin-right: 1.2rem;
`;

const Icon = styled(HiOutlineXMark)`
  stroke-width: 3;
  font-size: 1.6rem;
  color: var(--color-gray-50);
`;

export default function DeleteNoteBtn({ id }: { id: number }) {
  const { deleteNote } = useDeleteNote();

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    deleteNote(id);
  }

  return (
    <StyledDeleteNoteBtn onClick={handleClick}>
      <Icon />
    </StyledDeleteNoteBtn>
  );
}
