import styled, { css } from "styled-components";
import { Dispatch, SetStateAction } from "react";
import { HiOutlinePlus, HiOutlineXMark } from "react-icons/hi2";

type Props = {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type OpenProps = {
  $isOpen?: boolean;
};

const StyledAddNoteBtn = styled.button<OpenProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--color-blue-500);
  padding: 0.4rem;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) =>
    props.$isOpen
      ? css`
          position: absolute;
          top: 2rem;
          right: 2rem;
        `
      : null}

  &:hover {
    background-color: var(--color-blue-700);
  }
`;

const iconStyle = css`
  color: #fff;
  font-size: 1.8rem;
  stroke-width: 3;
`;

const OpenIcon = styled(HiOutlinePlus)`
  ${iconStyle}
`;

const CloseIcon = styled(HiOutlineXMark)`
  ${iconStyle}
`;

export default function OpenFormBtn({ isOpen, setIsOpen }: Props) {
  return (
    <StyledAddNoteBtn
      $isOpen={isOpen}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen ? <CloseIcon /> : <OpenIcon />}
    </StyledAddNoteBtn>
  );
}
