import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import useAqiContext from "../hooks/useAqiContext";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
`;

const Loader = () => {
  const { isLoading } = useAqiContext();

  if (!isLoading) return null;

  return (
    <LoaderContainer data-testid="loader-container">
      <CircularProgress />
    </LoaderContainer>
  );
};

export default Loader;
