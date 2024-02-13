import React from "react";
import styled from "@emotion/styled";
import type {
  AirQualityRangeInfo,
  CalculatedAQIsWithRanges,
} from "../../../../types/aqi-calc";

type SquareProps = {
  range: AirQualityRangeInfo;
  isToday?: boolean;
};

const SquareContainer = styled.div<SquareProps>`
  width: ${(props) => (props.isToday ? "150px" : "100px")};
  height: ${(props) => (props.isToday ? "150px" : "100px")};
  background-color: ${(props) => props.range.color};
  border: 2px solid ${(props) => props.range.color};
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.isToday ? "36px" : "24px")};
  font-weight: bold;
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 1000px) {
    width: ${(props) => (props.isToday ? "120px" : "80px")};
    height: ${(props) => (props.isToday ? "120px" : "80px")};
    font-size: ${(props) => (props.isToday ? "28px" : "18px")};
  }
`;
const Label = styled.div`
  font-family: Arial, sans-serif;
  text-shadow: 0px 0px #333;
  font-size: 20px;
  margin-bottom: 10px;
`;

const AirQualitySquares: React.FC<CalculatedAQIsWithRanges> = ({
  today,
  yesterday,
  tomorrow,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "26px",
        width: "100%",
        gap: "10px",
      }}
    >
      <div
        style={{ textAlign: "center", paddingTop: "2.5vh" }}
        data-testid="yesterday-square"
      >
        <Label
          style={{
            color: yesterday.range.color,
            textDecoration: yesterday.value === -1 ? "line-through" : "none",
          }}
        >
          Yesterday
        </Label>
        <SquareContainer range={yesterday.range}>
          {yesterday.value}
        </SquareContainer>
      </div>
      <div
        data-testid="today-square"
        style={{
          textAlign: "center",
          textDecoration: today.value === -1 ? "line-through" : "none",
        }}
      >
        <Label style={{ color: today.range.color }}>Today</Label>
        <SquareContainer range={today.range} isToday>
          {today.value}
        </SquareContainer>
      </div>
      <div
        data-testid="tomorrow-square"
        style={{
          textAlign: "center",
          paddingTop: "2.5vh",
          textDecoration: tomorrow.value === -1 ? "line-through" : "none",
        }}
      >
        <Label style={{ color: tomorrow.range.color }}>Tomorrow</Label>
        <SquareContainer range={tomorrow.range}>
          {tomorrow.value}
        </SquareContainer>
      </div>
    </div>
  );
};

export default AirQualitySquares;
