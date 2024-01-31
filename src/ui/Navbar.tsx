import styled from "styled-components";

import NavLinks from "./NavLinks";
import Avatar from "../features/authentication/Avatar";
import CreateNoteWrapper from "../features/note/CreateNoteWrapper";

const StyledNavbar = styled.nav`
  padding: 1.2rem 2.4rem;
  display: flex;
  align-items: center;
  gap: 2.4rem;
  border-bottom: var(--border-blue-sm);
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
