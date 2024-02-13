import { StructuredDailyConcentrationData } from "../types/aqi-calc";

export default function calculateAQI(
  concentrationData: StructuredDailyConcentrationData
): number {
  if (
    !concentrationData?.o3?.avg ||
    !concentrationData?.pm10?.avg ||
    !concentrationData?.pm25?.avg
  ) {
    return -1; // Return -1 if data for any pollutant is missing
  }
  // Define the AQI breakpoints and corresponding AQI values
  const breakpoints: [number, number][] = [
    [0, 50],
    [51, 100],
    [101, 150],
    [151, 200],
    [201, 300],
    [301, 500],
  ];
  const aqiValues: number[] = [0, 51, 101, 151, 201, 301, 401, 501];

  // Calculate sub-indices for each pollutant
  const subIndices = Object.keys(concentrationData).map((pollutant) => {
    const data =
      concentrationData[pollutant as keyof StructuredDailyConcentrationData];
    const concentration = data.avg;

    // Find the appropriate AQI breakpoint
    let i = 0;
    while (i < breakpoints.length && concentration > breakpoints[i][1]) {
      i++;
    }

    // Calculate sub-index using linear interpolation
    if (i === 0 || i === breakpoints.length) {
      return aqiValues[i];
    } else {
      const [bpLow, bpHigh] = breakpoints[i];
      const [aqiLow, aqiHigh] = [aqiValues[i], aqiValues[i + 1]]; // Fix here
      return Math.round(
        ((aqiHigh - aqiLow) / (bpHigh - bpLow)) * (concentration - bpLow) +
          aqiLow
      );
    }
  });

  // Return -1 if any sub-index is -1 (indicating insufficient data)
  if (subIndices.includes(-1)) {
    return -1;
  }

  // Return the highest sub-index as the overall AQI
  return Math.max(...subIndices);
}
