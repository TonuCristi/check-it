import { useState } from "react";
import styled from "styled-components";

import OpenFormBtn from "./OpenFormBtn";
import CreateNoteForm from "./CreateNoteForm";
import { createPortal } from "react-dom";

const StyledCreateNoteWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CreateNoteWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) return <OpenFormBtn setIsOpen={setIsOpen} />;

  return createPortal(
    <StyledCreateNoteWrapper>
      <OpenFormBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      <CreateNoteForm setIsOpen={setIsOpen} />
    </StyledCreateNoteWrapper>,
    document.body
  );
}
