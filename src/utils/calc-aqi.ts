import { StructuredDailyConcentrationData } from "../types/aqi-calc"; // Import necessary types

function calculateAQI(
  dailyConcentration: StructuredDailyConcentrationData
): number {
  if (
    !dailyConcentration ||
    !dailyConcentration.o3?.avg ||
    !dailyConcentration.pm10?.avg ||
    !dailyConcentration.pm25?.avg
  )
    return -1;
  // AQI breakpoints and corresponding concentration ranges for each pollutant
  const breakpoints: number[] = [0, 50, 100, 150, 200, 300, 400, 500];
  const o3Concentrations: number[] = [
    0, 0.054, 0.071, 0.086, 0.106, 0.201, 0.605, 1.25,
  ]; // O3 AQI
  const pm10Concentrations: number[] = [0, 54, 155, 255, 355, 425, 505, 605]; // PM10 AQI
  const pm25Concentrations: number[] = [
    0, 12, 35.5, 55.5, 150.5, 250.5, 350.5, 500.5,
  ]; // PM2.5 AQI

  // Function to calculate AQI for a single pollutant
  const calculatePollutantAQI = (
    value: number,
    concentrations: number[]
  ): number => {
    let index = 0;
    while (index < breakpoints.length && value > breakpoints[index]) {
      index++;
    }
    if (index === 0) return 0;
    if (index === breakpoints.length) return 500;
    const [low, high] = [breakpoints[index - 1], breakpoints[index]];
    const [ilo, ihi] = [concentrations[index - 1], concentrations[index]];
    return Math.round(((ihi - ilo) / (high - low)) * (value - low) + ilo);
  };

  // Calculate AQI for each pollutant
  const o3AQI = calculatePollutantAQI(
    dailyConcentration.o3.avg,
    o3Concentrations
  );
  const pm10AQI = calculatePollutantAQI(
    dailyConcentration.pm10.avg,
    pm10Concentrations
  );
  const pm25AQI = calculatePollutantAQI(
    dailyConcentration.pm25.avg,
    pm25Concentrations
  );

  // Return the maximum AQI among all pollutants
  return Math.max(o3AQI, pm10AQI, pm25AQI);
}

export default calculateAQI; // Export the calculateAQI function
