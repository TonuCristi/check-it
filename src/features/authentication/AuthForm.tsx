import { createContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Button from "../../ui/Button";

type AuthFormProps = {
  children: JSX.Element[];
};

type LabelProps = {
  children: string;
};

type InputProps = {
  placeholder: string;
  type: string;
};

const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: var(--border-blue-sm);
  padding: 4.8rem;
  border-radius: 2.1rem;
  gap: 1.2rem;
`;

const StyledLabel = styled.h2`
  color: var(--color-blue-300);
  margin-bottom: 1.2rem;
`;

const StyledInput = styled.input`
  border: var(--border-blue-sm);
  border-radius: 1.5rem;
  background: none;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: inherit;
  padding: 1.2rem;
  outline: none;
  color: var(--color-blue-300);

  &::placeholder {
    color: var(--color-blue-300);
    opacity: 0.5;
  }
`;

const StyledForgotPassword = styled(NavLink)`
  text-decoration: none;
  color: var(--color-blue-100);
  font-size: 1.4rem;
`;

const AuthContext = createContext(null);

export default function AuthForm({ children }: AuthFormProps) {
  return (
    <AuthContext.Provider value={null}>
      <StyledAuthForm>{children}</StyledAuthForm>
    </AuthContext.Provider>
  );
}

function Label({ children }: LabelProps) {
  return <StyledLabel>{children}</StyledLabel>;
}

function Input({ placeholder, type }: InputProps) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

function ForgotPasswordLink() {
  return <StyledForgotPassword to="/">Forgot password?</StyledForgotPassword>;
}

function ActionButton({ children }: { children: string }) {
  return <Button variant="auth">{children}</Button>;
}

AuthForm.Label = Label;
AuthForm.Input = Input;
AuthForm.ActionButton = ActionButton;
AuthForm.ForgotPasswordLink = ForgotPasswordLink;
