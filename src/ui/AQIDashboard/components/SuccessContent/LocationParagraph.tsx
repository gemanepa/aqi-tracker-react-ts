import styled from "@emotion/styled";
import translations from "@/assets/i18n/en.json";
import useAqiContext from "../../hooks/useAqiContext";

const { dashboard } = translations.body;

export const StyledLocationParagraph = styled.h3`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
  text-decoration: underline;
  color: #4689c8;
  text-shadow: 0px 0px #7cb9fb;
  font-size: 100%;
  @media (min-width: 1200px) {
    margin-top: 1.5vh;
    font-size: 1.1vw;
  }
`;

const LocationParagraph = () => {
  const { response } = useAqiContext();
  const city = response?.data?.city?.name;
  const forecast = response?.data?.forecast;
  if (!city || !forecast) return null;

  return (
    <StyledLocationParagraph data-testid="location-paragraph">
      {dashboard.airQualityIn} {city}
    </StyledLocationParagraph>
  );
};

export default LocationParagraph;
