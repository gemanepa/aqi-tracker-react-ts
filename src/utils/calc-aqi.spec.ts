import { StructuredDailyConcentrationData } from "../types/aqi-calc";
import calculateAQI from "./calc-aqi";

describe("calculateAQI", () => {
  test("should calculate AQI correctly when all concentrations are within range", () => {
    const data: StructuredDailyConcentrationData = {
      o3: { avg: 70, day: "2024-02-13", max: 80, min: 60 },
      pm10: { avg: 40, day: "2024-02-13", max: 50, min: 30 },
      pm25: { avg: 20, day: "2024-02-13", max: 25, min: 15 },
    };
    const expectedAQI = 70; // Expected AQI value based on provided concentrations
    expect(calculateAQI(data)).toEqual(expectedAQI);
  });

  test("should calculate AQI correctly when some concentrations exceed range", () => {
    const data: StructuredDailyConcentrationData = {
      o3: { avg: 110, day: "2024-02-13", max: 120, min: 100 }, // O3 exceeds range
      pm10: { avg: 40, day: "2024-02-13", max: 50, min: 30 },
      pm25: { avg: 20, day: "2024-02-13", max: 25, min: 15 },
    };
    const expectedAQI = 110; // Expected AQI value based on provided concentrations
    expect(calculateAQI(data)).toEqual(expectedAQI);
  });

  test("should calculate AQI correctly when all concentrations exceed range", () => {
    const data: StructuredDailyConcentrationData = {
      o3: { avg: 110, day: "2024-02-13", max: 120, min: 100 }, // O3 exceeds range
      pm10: { avg: 160, day: "2024-02-13", max: 170, min: 150 }, // PM10 exceeds range
      pm25: { avg: 80, day: "2024-02-13", max: 90, min: 70 }, // PM2.5 exceeds range
    };
    const expectedAQI = 160; // Expected AQI value based on provided concentrations
    expect(calculateAQI(data)).toEqual(expectedAQI);
  });
});
