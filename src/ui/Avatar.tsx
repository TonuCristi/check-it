import styled from "styled-components";

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-violet-400);
`;

const Name = styled.p``;

const NoImage = styled.div`
  background-color: var(--color-violet-300);
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
  return (
    <StyledAvatar>
      <Name>John Smith</Name>
      <NoImage />
    </StyledAvatar>
  );
}
