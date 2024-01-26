import styled from "styled-components";

const StyledNotesMessage = styled.p`
  color: var(--color-blue-400);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2;
`;

export default function NotesMessage() {
  return (
    <StyledNotesMessage>
      Really?
      <br /> Not even a single note? 😄
    </StyledNotesMessage>
  );
}
