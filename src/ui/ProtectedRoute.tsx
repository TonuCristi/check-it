import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "./Loader";

import { useUser } from "../features/authentication/useUser";
import styled from "styled-components";

type ProtectedRouteProps = PropsWithChildren;

const StyledProtectedRoute = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-gray-900);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading)
      navigate("/authentication", { replace: true });
  }, [navigate, isAuthenticated, isLoading]);

  if (isLoading)
    return (
      <StyledProtectedRoute>
        <Loader />
      </StyledProtectedRoute>
    );

  return children;
}
