import styled from "styled-components";

const StyledLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 2.4rem;
  color: var(--color-blue-400);

  padding: 2.4rem;
  border-right: var(--border-blue-sm);
  border-bottom: var(--border-blue-sm);
`;

const Span = styled.span`
  text-transform: uppercase;
`;

export default function Logo() {
  return (
    <StyledLogo>
      Check<Span>It</Span>
    </StyledLogo>
  );
}
