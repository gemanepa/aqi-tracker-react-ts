import { ReactNode } from "react";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import DashboardTitle from "./DashboardTitle";
import FormContainer from "./FormContainer";

const StyledPaper = styled(Paper)`
  && {
    padding: 20px;
    margin: 20px;
    margin: auto;
    width: 80%;
    @media (min-width: 768px) {
      width: 70%;
      margin-top: 15vh;
      min-height: 60vh;
    }
  }
`;

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StyledPaper elevation={12} square={false}>
      <DashboardTitle />
      <FormContainer />
      {children}
    </StyledPaper>
  );
};

export default DashboardLayout;
