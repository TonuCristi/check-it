import { useState } from "react";
import styled from "styled-components";

import LoginForm from "../features/authentication/LoginForm";
import Button from "../ui/Button";
import RegisterForm from "../features/authentication/RegisterForm";

const StyledAuthentication = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dblue-900);
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
