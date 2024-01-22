import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  isEditing: boolean;
  content: string;
};

const StyledContent = styled.textarea`
  width: 100%;
  height: 90%;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.6rem;
  border: var(--border-violet-sm);
  color: var(--color-violet-400);
  background: none;
  border-radius: 1.5rem;
  padding: 2.4rem;
  outline: none;
  resize: none;

  &:disabled {
    color: var(--color-violet-300);
    cursor: text;
  }
`;

export default function Content({ isEditing, content }: Props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(content);
  }, [content]);

  return (
    <StyledContent
      disabled={!isEditing}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
