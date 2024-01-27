import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

const links = [
  {
    path: "/",
    field: "Note",
  },
  {
    path: "/statistics",
    field: "Statistics",
  },
  {
    path: "/settings",
    field: "Settings",
  },
];

const StyledNavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-right: auto;
`;

const Item = styled.li`
  width: 10rem;
  border-radius: 1.5rem;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-blue-400);
  }
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  width: 100%;
  color: var(--color-blue-400);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.8rem;
  transition: all 0.2s;
  position: relative;

  &:hover {
    color: var(--color-gray-300);
  }
`;

const NoteNum = styled.div`
  position: absolute;
  top: 0;
  left: 70%;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  color: #fff;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-red-600);
`;

export default function NavLinks() {
  const { noteId } = useParams();
  const [id, setId] = useState<string | null>(null);
  const idd = localStorage.getItem("id");

  useEffect(() => {
    if (idd) return setId(JSON.parse(idd).index);

    return setId(null);
  }, [noteId, idd]);

  return (
    <StyledNavLinks>
      {links.map(({ path, field }) => (
        <Item key={field}>
          <StyledNavLink to={path}>
            {field}
            {field === "Note" && <NoteNum>{id ?? "?"}</NoteNum>}
          </StyledNavLink>
        </Item>
      ))}
    </StyledNavLinks>
  );
}
