import { useContext } from "react";
import styled from "@emotion/styled";
import translations from "@/assets/i18n/en.json";
import AqiContext from "../../context/AqiContext";

const { dashboard } = translations.body;

const LatitudeLongitudeInfo = styled.h4`
  text-align: center;
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  margin-top: 4px;
`;

const LatLongRow = () => {
  const { response } = useContext(AqiContext);

  const latitude = response?.data?.city?.geo[0];
  const longitude = response?.data?.city?.geo[1];

  return (
    <LatitudeLongitudeInfo>
      {dashboard.latitude}: {latitude} | {dashboard.longitude}: {longitude}
    </LatitudeLongitudeInfo>
  );
};

export default LatLongRow;
