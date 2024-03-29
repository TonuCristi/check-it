import styled from "styled-components";

import Button from "../../ui/Button";

import { useUser } from "./useUser";
import { useSignout } from "./useSignout";

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-blue-400);
`;

const Name = styled.p``;

const NoImage = styled.div`
  background-color: var(--color-blue-300);
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
`;

// const Image = styled.img`
//   background-color: var(--color-gray-300);
//   width: 5rem;
//   height: 5rem;
//   border-radius: 100%;
// `;

export default function Avatar() {
  const { user } = useUser();
  const { signOutUser } = useSignout();

  return (
    <StyledAvatar>
      <Name>{user?.user_metadata.fullName}</Name>
      <NoImage />
      <Button variant="regular" onClick={() => signOutUser()}>
        Sign Out
      </Button>
    </StyledAvatar>
  );
}
