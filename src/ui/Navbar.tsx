import styled from "styled-components";

import NavLinks from "./NavLinks";
import Avatar from "./Avatar";
import CreateNoteWrapper from "../features/note/CreateNoteWrapper";

const StyledNavbar = styled.nav`
  border-bottom: var(--border-violet-sm);
  padding: 1.2rem 2.4rem;
  display: flex;
  align-items: center;
  gap: 2.4rem;
  position: relative;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <NavLinks />
      <CreateNoteWrapper />
      <Avatar />
    </StyledNavbar>
  );
}
