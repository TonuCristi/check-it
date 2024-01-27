import styled from "styled-components";
import { NavLink } from "react-router-dom";

import DeleteNoteBtn from "./DeleteNoteBtn";

import { Title } from "./NotesTitles";

type Props = {
  index: number;
  title: Title;
};

const StyledNoteTitle = styled.li`
  width: 100%;
  background-color: var(--color-blue-400);
  border-radius: 1.9rem;
  display: flex;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-blue-600);
  }

  &:active {
    background-color: var(--color-blue-600);
  }
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem;
  color: var(--color-gray-50);
  width: 100%;
  display: flex;
  gap: 0.8rem;
`;

const Index = styled.div``;

const StyledTitle = styled.p``;

export default function NoteTitle({ index, title: { id, title } }: Props) {
  function handleClick() {
    const ids = {
      index,
      id,
    };

    if (index) {
      localStorage.setItem("id", `${JSON.stringify(ids)}`);
    }
  }

  return (
    <StyledNoteTitle>
      <StyledNavLink to={`${id}`} onClick={handleClick}>
        <Index>{index}</Index>
        <StyledTitle>
          {title.length < 15 ? title : `${title.slice(0, 15)}...`}
        </StyledTitle>
      </StyledNavLink>
      <DeleteNoteBtn id={id} />
    </StyledNoteTitle>
  );
}
