import styled from "@emotion/styled";
import applogo from "@/assets/media/applogo.png";

const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    width: 260px;
    height: 260px;
  }
`;

export default function Logo() {
  return <StyledLogo src={applogo} alt="App Logo" data-testid="applogo" />;
}
