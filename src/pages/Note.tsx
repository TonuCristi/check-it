import styled from "styled-components";
import { useState } from "react";

import Title from "../features/note/Title";
import EditBtn from "../features/note/EditBtn";
import SaveBtn from "../features/note/SaveBtn";
import Content from "../features/note/Content";
import Loader from "../ui/Loader";

import { useNote } from "../features/note/useNote";

const StyledNote = styled.div`
  padding: 4.8rem 2.4rem;
  width: 90%;
  margin: 0 auto;
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
  color: var(--color-violet-400);
`;

export default function Note() {
  const [isEditing, setIsEditing] = useState(false);
  const { note, isLoading, error } = useNote();

  if (!note)
    return (
      <StyledNote>
        <Message>Select a note or create one</Message>
      </StyledNote>
    );

  if (isLoading) return <Loader />;

  if (error) return <div>Something wen wrong...</div>;

  return (
    <StyledNote>
      <Row>
        <Title isEditing={isEditing} title={note.title} />
        <EditBtn isEditing={isEditing} setIsEditing={setIsEditing} />
        <SaveBtn isEditing={isEditing} />
      </Row>

      <Content isEditing={isEditing} content={note.content} />
    </StyledNote>
  );
}
