import styled from "@emotion/styled";
import translations from "@/assets/i18n/en.json";
import formatTitle from "../utils/formatTitle";
import Logo from "./Logo";

const LogoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 24px;

  @media (min-width: 1200px) {
    flex-direction: row;
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
      <Logo />
      <Title>
        <span>{firstRow}</span>
        <span>{secondRow}</span>
      </Title>
    </LogoTitleWrapper>
  );
}
