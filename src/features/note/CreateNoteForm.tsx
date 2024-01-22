import styled from "styled-components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

import Button from "../../ui/Button";
import Loader from "../../ui/Loader";

import { useCreateNote } from "./useCreateNote";

const StyledCreateNoteForm = styled.form`
  border: var(--border-violet-sm);
  border-radius: 1.1rem;
  background-color: #fff;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 70%;
`;

const Label = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-violet-400);
  margin-bottom: 2.4rem;
`;

const TitleInput = styled.input`
  border: var(--border-violet-sm);
  border-radius: 1.1rem;
  color: var(--color-violet-400);
  font-family: inherit;
  font-weight: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  outline: none;
  width: 50%;
  margin-bottom: 1.2rem;

  &::placeholder {
    color: var(--color-violet-300);
  }
`;

const ContentInput = styled.textarea`
  border: var(--border-violet-sm);
  border-radius: 1.1rem;
  color: var(--color-violet-400);
  font-family: inherit;
  font-weight: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  outline: none;
  width: 50%;
  height: 100%;
  margin-bottom: 2.4rem;
  resize: none;

  &::placeholder {
    color: var(--color-violet-300);
  }
`;

export default function CreateNoteForm({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { createNote, isPending, error } = useCreateNote();
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    createNote(data);
    setIsOpen(false);
  };

  if (isPending) return <Loader />;

  if (error) return <div>Something went wrong...</div>;

  return (
    <StyledCreateNoteForm onSubmit={handleSubmit(onSubmit)}>
      <Label>Create note</Label>
      <TitleInput
        placeholder="Title..."
        {...register("title", { required: true })}
      />
      <ContentInput
        placeholder="Content..."
        {...register("content", { required: true })}
      />
      <Button variant="regular">Create note</Button>
    </StyledCreateNoteForm>
  );
}
