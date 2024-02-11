import type { AirQualityRange, AirQualityRangeInfo } from "../types/aqi-calc";
import translations from "@/assets/i18n/en.json";

const { airRanges } = translations.body;

function getAqiRange(index: number): AirQualityRangeInfo {
  const ranges: AirQualityRange[] = [
    {
      min: 0,
      max: 50,
      status: airRanges["0-50"].status,
      description: airRanges["0-50"].description,
      color: "green",
    },
    {
      min: 51,
      max: 100,
      status: airRanges["51-100"].status,
      description: airRanges["51-100"].description,
      color: "#D2B55B",
    },
    {
      min: 101,
      max: 150,
      status: airRanges["101-150"].status,
      description: airRanges["101-150"].description,
      color: "orange",
    },
    {
      min: 151,
      max: 200,
      status: airRanges["151-200"].status,
      description: airRanges["151-200"].description,
      color: "red",
    },
    {
      min: 201,
      max: 300,
      status: airRanges["201-300"].status,
      description: airRanges["201-300"].description,
      color: "darkred",
    },
    {
      min: 301,
      max: 500,
      status: airRanges["301-500"].status,
      description: airRanges["301-500"].description,
      color: "purple",
    },
  ];

  const range = ranges.find(
    (range) => index >= range.min && index <= range.max
  );
  if (range) {
    return {
      status: range.status,
      description: range.description,
      color: range.color,
    };
  } else {
    return {
      status: airRanges.invalid.status,
      description: airRanges.invalid.description,
      color: "lightgray",
    };
  }
}

export default getAqiRange;
