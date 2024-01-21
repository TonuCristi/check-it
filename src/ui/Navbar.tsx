import styled from "styled-components";

import NavLinks from "./NavLinks";
import AddNoteBtn from "./AddNoteBtn";
import Avatar from "./Avatar";

const StyledNavbar = styled.nav`
  border-bottom: var(--border-violet-sm);
  padding: 1.2rem 2.4rem;
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <NavLinks />
      <AddNoteBtn />
      <Avatar />
    </StyledNavbar>
  );
}
