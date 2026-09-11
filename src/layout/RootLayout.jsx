import { Outlet } from "react-router-dom";
import styled from "styled-components";

function RootLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
}

export default RootLayout;

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 770px;

  position: relative;
  background: #ffffff;

  @media (max-width: 390px) {
    min-height: 100dvh;
  }
`;
