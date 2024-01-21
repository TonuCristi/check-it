import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Logo from "./Logo";

const StyledRootLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 30rem auto;
  grid-template-rows: auto 1fr;
`;

export default function RootLayout() {
  return (
    <StyledRootLayout>
      <Logo />
      <Navbar />
      <Sidebar />
      <Outlet />
    </StyledRootLayout>
  );
}
