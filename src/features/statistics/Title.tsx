import styled from "styled-components";

const StyledTitle = styled.h1`
  color: var(--color-blue-400);
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 2.4rem;
`;

export default function Title() {
  return <StyledTitle>Statistics</StyledTitle>;
}
