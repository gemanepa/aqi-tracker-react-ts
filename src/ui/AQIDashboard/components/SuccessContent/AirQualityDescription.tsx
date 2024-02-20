import styled from "@emotion/styled";
import useAqiContext from "../../hooks/useAqiContext";

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

const AirQualityDescription = () => {
  const { aqis } = useAqiContext();
  if (!aqis?.today) return null;

  return (
    <DescriptionParagraph color={aqis.today.range.color}>
      {aqis.today.range.description}
    </DescriptionParagraph>
  );
};

export default AirQualityDescription;
