import styled from "styled-components";

import NavLinks from "./NavLinks";
import Avatar from "../features/authentication/Avatar";
import CreateNoteWrapper from "../features/note/CreateNoteWrapper";

const StyledNavbar = styled.nav`
  padding: 1.2rem 2.4rem;
  display: flex;
  align-items: center;
  gap: 2.4rem;
  background-color: var(--color-gray-900);
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
