import { MouseEvent } from "react";
import styled, { css } from "styled-components";

type Props = {
  variant: "regular" | "auth";
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: string;
};

type VariantProps = {
  $variant: "regular" | "auth";
};

const variants = {
  regular: css`
    background-color: var(--color-blue-400);
    color: var(--color-gray-50);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.6rem 2.4rem;
    border-radius: 1.5rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: var(--color-blue-600);
    }

    &:disabled {
      background-color: var(--color-blue-200);
      cursor: not-allowed;
    }
  `,

  auth: css`
    background-color: var(--color-blue-400);
    color: var(--color-gray-50);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.6rem 2.4rem;
    border-radius: 1.5rem;
    margin-top: 1.2rem;
    width: 100%;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: var(--color-blue-600);
    }

    &:disabled {
      background-color: var(--color-blue-200);
      cursor: not-allowed;
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
