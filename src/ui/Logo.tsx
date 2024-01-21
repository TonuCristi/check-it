import styled from "styled-components";

const StyledLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 2.4rem;
  /* text-transform: uppercase; */
  color: var(--color-violet-400);

  padding: 2.4rem;
  border-right: var(--border-violet-sm);
  border-bottom: var(--border-violet-sm);
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
