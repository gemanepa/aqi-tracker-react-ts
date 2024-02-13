import { useContext } from "react";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import AqiContext from "../context/AqiContext";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
`;

const Loader = () => {
  const { isLoading } = useContext(AqiContext);

  if (!isLoading) return null;

  return (
    <LoaderContainer data-testid="loader-container">
      <CircularProgress />
    </LoaderContainer>
  );
};

export default Loader;
