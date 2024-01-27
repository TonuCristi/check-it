import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import LoginForm from "../features/authentication/LoginForm";
import Button from "../ui/Button";
import RegisterForm from "../features/authentication/RegisterForm";
import Loader from "../ui/Loader";

import { useUser } from "../features/authentication/useUser";

const StyledAuthentication = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray-900);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
`;

export default function Authentication() {
  const [opened, setOpened] = useState(false);
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, isLoading, navigate]);

  if (isAuthenticated === true)
    return (
      <StyledAuthentication>
        <Loader />
      </StyledAuthentication>
    );

  return (
    <StyledAuthentication>
      <Wrapper>
        <Button variant="regular" onClick={() => setOpened((prev) => !prev)}>
          {opened ? "Login" : "Register"}
        </Button>

        {opened ? <RegisterForm /> : <LoginForm />}
      </Wrapper>
    </StyledAuthentication>
  );
}
