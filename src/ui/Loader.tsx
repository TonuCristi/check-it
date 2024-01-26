import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLoader = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
`;

const OuterBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  border: 0.7rem solid var(--color-blue-100);
`;

const InnerBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  border-top: 0.7rem solid transparent;
  border-bottom: 0.7rem solid transparent;
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid var(--color-blue-500);
  animation: border 1s linear infinite;

  @keyframes border {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  return (
    <Wrapper>
      <StyledLoader>
        <OuterBorder></OuterBorder>
        <InnerBorder></InnerBorder>
      </StyledLoader>
    </Wrapper>
  );
}
