import { useContext } from "react";
import styled from "@emotion/styled";
import getAQIByDate from "@/utils/get-aqi-by-date";
import { AQIApiResponse } from "@/types/aqi-api-response";
import type { CalculatedAQIsWithRanges } from "@/types/aqi-calc";
import AirQualitySquares from "./AirQualitySquares";
import translations from "@/assets/i18n/en.json";
import AqiContext from "../../context/AqiContext";
import LatitudeLongitudeInfo from "./LatLongRow";

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

const DescriptionParagraph = styled.p`
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 200px;
  font-family: "Arial, sans-serif";
  font-weight: bold;
  color: ${(props) => props.color};
  textshadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const SuccessContent = () => {
  const { response } = useContext(AqiContext);
  const city = response?.data?.city?.name;
  const forecast = response?.data?.forecast;
  if (!city || !forecast) return null;

  const aqis: CalculatedAQIsWithRanges = getAQIByDate(
    response as AQIApiResponse
  );
  return (
    <>
      <StyledLocationParagraph>
        {dashboard.airQualityIn} {city}
      </StyledLocationParagraph>
      <LatitudeLongitudeInfo />
      <AirQualitySquares {...aqis} />
      {aqis.today && (
        <DescriptionParagraph color={aqis.today.range.color}>
          {aqis.today.range.description}
        </DescriptionParagraph>
      )}
    </>
  );
};

export default SuccessContent;
