import { useEffect } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import styled from "styled-components";

export interface Props {
  isEditing: boolean;
  title: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const StyledTitle = styled.input`
  border: var(--border-blue-sm);
  border-radius: 1.9rem;
  color: var(--color-blue-400);
  outline: none;
  width: 100%;
  background: none;
  font-size: 2rem;
  font-weight: 700;
  padding: 0.6rem 1.2rem;
  width: 60%;
  margin-right: auto;

  &:disabled {
    color: var(--color-blue-200);
    border: var(--border-blue-disabled);
    cursor: text;
  }
`;

export default function Title({ isEditing, title, register, setValue }: Props) {
  useEffect(() => {
    setValue("title", title);
  }, [title, setValue]);

  return <StyledTitle disabled={!isEditing} {...register("title")} />;
}
