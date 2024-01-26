import styled from "styled-components";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Title from "../features/note/Title";
import EditBtn from "../features/note/EditBtn";
import SaveBtn from "../features/note/SaveBtn";
import Content from "../features/note/Content";
import Loader from "../ui/Loader";

import { useNote } from "../features/note/useNote";
import { useUpdateNote } from "../features/note/useUpdateNote";
import { useParams } from "react-router-dom";

interface Note {
  title: string;
  content: string;
}

const StyledNote = styled.form`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2.4rem;
`;

const Message = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--color-blue-400);
`;

const LoaderWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Note() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { note, isLoading, error } = useNote();
  const { editNote, isPending, updateError } = useUpdateNote();
  const { noteId } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsEditing(false);
    editNote({
      id: noteId,
      created_at: note.created_at,
      title: data.title,
      content: data.content,
    });
  };

  if (note === null)
    return (
      <StyledNote>
        <Message>Select a note or create one</Message>
      </StyledNote>
    );

  if (isLoading || isPending)
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );

  if (error || updateError)
    return <div>{error?.message || updateError?.message}</div>;

  return (
    <StyledNote onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Title
          isEditing={isEditing}
          title={note.title}
          register={register}
          setValue={setValue}
        />
        <EditBtn setIsEditing={setIsEditing} />
        <SaveBtn isEditing={isEditing} />
      </Row>

      <Content
        isEditing={isEditing}
        content={note.content}
        register={register}
        setValue={setValue}
      />
    </StyledNote>
  );
}
