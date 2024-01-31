import styled, { css } from "styled-components";

type Props = {
  error?: Error | null;
  children?: React.ReactNode;
  variant: "regular" | "error";
};

type VariantProps = {
  $variant: "regular" | "error";
};

const variants = {
  regular: css`
    color: var(--color-blue-400);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.2;
  `,

  error: css`
    color: #fff;
    background-color: var(--color-red-600);
    padding: 1.2rem;
    border-radius: 2.1rem;
  `,
};

const StyledMessage = styled.p<VariantProps>`
  ${(props) => variants[props.$variant]}
`;

export default function Message({ children, error, variant }: Props) {
  if (error) {
    return (
      <>
        {!!error && (
          <StyledMessage $variant={variant}>{error.message}</StyledMessage>
        )}
      </>
    );
  }

  if (children) {
    return <StyledMessage $variant={variant}>{children}</StyledMessage>;
  }
}
