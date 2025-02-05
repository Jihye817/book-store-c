import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutStyle>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutStyle>
  );
}

const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
`;

const Main = styled.div`
  padding: 20px 0;
`;

export default Layout;
