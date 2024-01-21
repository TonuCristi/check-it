import { NavLink } from "react-router-dom";
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
    background-color: var(--color-violet-400);
    color: #fff;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  width: 100%;
  color: var(--color-violet-400);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.8rem;
  transition: all 0.2s;

  &:hover {
    color: #fff;
  }
`;

export default function NavLinks() {
  return (
    <StyledNavLinks>
      {links.map(({ path, field }) => (
        <Item key={field}>
          <StyledNavLink to={path}>{field}</StyledNavLink>
        </Item>
      ))}
    </StyledNavLinks>
  );
}
