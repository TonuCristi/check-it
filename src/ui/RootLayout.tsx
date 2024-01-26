import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Logo from "./Logo";

const StyledRootLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: auto 1fr;
  background-color: var(--color-gray-900);
`;

// const Container = styled.div`
//   padding: 1.2rem 2.4rem 2.4rem 1.2rem;
//   border: var(--border-blue-sm);
//   border-radius: 2.7rem;
//   margin: 2.4rem;
// `;

const Main = styled.main`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  padding: 4.8rem;
`;

export default function RootLayout() {
  return (
    <StyledRootLayout>
      <Logo />
      <Navbar />
      <Sidebar />

      {/* <Container> */}
      <Main>
        <Outlet />
      </Main>
      {/* </Container> */}
    </StyledRootLayout>
  );
}
