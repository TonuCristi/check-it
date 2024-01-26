import { useEffect } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import styled from "styled-components";

type Props = {
  isEditing: boolean;
  content: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

const StyledContent = styled.textarea`
  width: 100%;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.6rem;
  border: var(--border-blue-sm);
  color: var(--color-blue-400);
  background: none;
  border-radius: 1.5rem;
  padding: 2.4rem;
  outline: none;
  resize: none;

  &:disabled {
    color: var(--color-blue-300);
    cursor: text;
  }
`;

export default function Content({
  isEditing,
  content,
  register,
  setValue,
}: Props) {
  useEffect(() => {
    setValue("content", content);
  }, [content, setValue]);

  return <StyledContent disabled={!isEditing} {...register("content")} />;
}
