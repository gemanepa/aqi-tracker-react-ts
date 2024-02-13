import styled from "@emotion/styled";
import translations from "@/assets/i18n/en.json";

const StyledHeaderSubtitle = styled.h2`
  color: white;
  text-shadow: 2px 2px #4689c8;
  font-size: 240%;
  text-align: center;

  @media (min-width: 1200px) {
    margin-top: -0.5vh;
    margin-bottom: -0.5vh;
    font-size: 2.46vw;
    padding: 15%;
  }
`;

export default function HeaderSubtitle() {
  const { subtitle } = translations.body.header;

  return (
    <StyledHeaderSubtitle data-testid="subheader">
      {subtitle}
    </StyledHeaderSubtitle>
  );
}
