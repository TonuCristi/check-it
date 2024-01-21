import styled, { css } from "styled-components";

type Props = {
  variant: "regular";
  disabled?: boolean;
  onClick?: () => void;
  children: string;
};

type VariantProps = {
  $variant: "regular";
};

const variants = {
  regular: css`
    background-color: var(--color-violet-400);
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.6rem 2.4rem;
    border-radius: 1.5rem;
    cursor: pointer;

    &:disabled {
      background-color: var(--color-violet-200);
      cursor: no-drop;
    }
  `,
};

const StyledButton = styled.button<VariantProps>`
  border: none;
  background: none;
  font-family: inherit;
  font-weight: inherit;

  ${(props) => variants[props.$variant]}
`;

export default function Button({
  variant,
  disabled,
  onClick,
  children,
}: Props) {
  return (
    <StyledButton $variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
