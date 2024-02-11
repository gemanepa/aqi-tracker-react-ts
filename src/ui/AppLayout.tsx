import styled from "@emotion/styled";
import { ReactNode } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledHeaderContainer = styled.div`
  padding-top: 8vh;

  @media (min-width: 768px) {
    padding-top: 13vh;
  }
`;

const StyledAQIDashboardContainer = styled.div`
  padding-bottom: 8vh;
  @media (min-width: 768px) {
    padding-bottom: 0vh;
  }
`;

type AppLayoutProps = {
  Header: ReactNode;
  AQIDashboard: ReactNode;
};

function AppLayout({ Header, AQIDashboard }: AppLayoutProps) {
  return (
    <StyledAppLayout>
      <StyledHeaderContainer>{Header}</StyledHeaderContainer>
      <StyledAQIDashboardContainer>{AQIDashboard}</StyledAQIDashboardContainer>
    </StyledAppLayout>
  );
}

export default AppLayout;
