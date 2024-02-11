import styled from "@emotion/styled";
import translations from "@/assets/i18n/en.json";

const { dashboard } = translations.body;

const StyledTitle = styled.h1`
  color: #4689c8;
  text-shadow: #7cb9fb 1px 1px;
  text-align: center;
`;

const DashboardTitle = () => <StyledTitle>{dashboard.title}</StyledTitle>;

export default DashboardTitle;
