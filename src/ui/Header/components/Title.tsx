import styled from "@emotion/styled";
import applogo from "@/assets/media/applogo.png";
import translations from "@/assets/i18n/en.json";
import formatTitle from "../utils/formatTitle";

const LogoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 24px;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    width: 260px;
    height: 260px;
  }
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  color: white;
  margin: 0;
  padding: 0;
  border: 0;
  text-shadow: 2px 2px #4689c8;
  font-size: 340%;

  @media (min-width: 1200px) {
    font-size: 7.2vh;
    text-shadow: 0.15vw 0.15vw #4689c8;
    padding-bottom: 1vh;
  }
`;

export default function HeaderTitle() {
  const { title } = translations.body.header;
  const { firstRow, secondRow } = formatTitle(title);

  return (
    <LogoTitleWrapper>
      <Logo src={applogo} alt="App Logo" data-test="applogo" />
      <Title>
        <span>{firstRow}</span>
        <span>{secondRow}</span>
      </Title>
    </LogoTitleWrapper>
  );
}
