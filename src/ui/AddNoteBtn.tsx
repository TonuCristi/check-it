import styled from "styled-components";
import { HiOutlinePlus } from "react-icons/hi2";

const StyledAddNoteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--color-violet-400);
  padding: 0.4rem;
  border-radius: 100%;
  cursor: pointer;
`;

const Icon = styled(HiOutlinePlus)`
  color: #fff;
  font-size: 1.8rem;
  stroke-width: 3;
`;

export default function AddNoteBtn() {
  return (
    <StyledAddNoteBtn>
      <Icon />
    </StyledAddNoteBtn>
  );
}
