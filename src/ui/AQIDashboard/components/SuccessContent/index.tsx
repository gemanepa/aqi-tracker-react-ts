import AirQualitySquares from "./AirQualitySquares";
import LocationParagraph from "./LocationParagraph";
import LatitudeLongitudeInfo from "./LatLongRow";
import AirQualityDescription from "./AirQualityDescription";

const SuccessContent = () => {
  return (
    <>
      <LocationParagraph />
      <LatitudeLongitudeInfo />
      <AirQualitySquares />
      <AirQualityDescription />
    </>
  );
};

export default SuccessContent;
