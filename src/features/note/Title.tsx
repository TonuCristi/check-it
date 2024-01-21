import { useState } from "react";
import styled from "styled-components";

export interface Props {
  isEditing: boolean;
}

const StyledTitle = styled.input`
  border: var(--border-violet-sm);
  border-radius: 1.9rem;
  color: var(--color-violet-400);
  outline: none;
  width: 100%;
  background: none;
  font-size: 2rem;
  font-weight: 700;
  padding: 0.6rem 1.2rem;
  width: 60%;
  margin-right: auto;

  &:disabled {
    color: var(--color-violet-300);
    cursor: text;
  }
`;

export default function Title({ isEditing }: Props) {
  const [value, setValue] = useState<string>("To feed the dog");

  return (
    <StyledTitle
      disabled={!isEditing}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
