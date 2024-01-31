import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Loader from "./Loader";
import Authentication from "../pages/Authentication";

import { useUser } from "../features/authentication/useUser";

type ProtectedRouteProps = PropsWithChildren;

const StyledProtectedRoute = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/", { replace: true });
    }
  }, [navigate, isAuthenticated, isLoading, role]);

  if (!role) {
    return <Authentication />;
  }

  if (isLoading) {
    return (
      <StyledProtectedRoute>
        <Loader />
      </StyledProtectedRoute>
    );
  }

  return children;
}
