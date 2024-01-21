import styled from "styled-components";

import Title from "../features/note/Title";
import EditBtn from "../features/note/EditBtn";
import SaveBtn from "../features/note/SaveBtn";
import Content from "../features/note/Content";
import { useState } from "react";
import { useParams } from "react-router-dom";

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

export default function Note() {
  const [isEditing, setIsEditing] = useState(false);
  const { noteId } = useParams();
  console.log(noteId);

  return (
    <StyledNote>
      <Row>
        <Title isEditing={isEditing} />
        <EditBtn isEditing={isEditing} setIsEditing={setIsEditing} />
        <SaveBtn isEditing={isEditing} />
      </Row>

      <Content isEditing={isEditing} />
    </StyledNote>
  );
}
