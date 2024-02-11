import styled from "@emotion/styled";
import HeaderTitle from "./Title";
import HeaderSubtitle from "./HeaderSubtitle";

const FlexBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Header() {
  return (
    <FlexBoxWrapper>
      <HeaderContainer>
        <HeaderTitle />
      </HeaderContainer>
      <HeaderSubtitle />
    </FlexBoxWrapper>
  );
}
