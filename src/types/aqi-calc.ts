interface DailyForecast {
  o3: DailyData[];
  pm10: DailyData[];
  pm25: DailyData[];
}

interface Pollutant {
  name: string;
  concentration: number;
}

interface DailyData {
  avg: number;
  day: string;
  max: number;
  min: number;
}

type StructuredDailyConcentrationData = {
  o3: DailyData;
  pm10: DailyData;
  pm25: DailyData;
};

type AirQualityRange = AirQualityRangeInfo & {
  min: number;
  max: number;
};

type AirQualityRangeInfo = {
  status: string;
  description: string;
  color: string;
};

type CalculatedAQIsWithRanges = {
  today: {
    value: number;
    range: AirQualityRangeInfo;
  };
  yesterday: {
    value: number;
    range: AirQualityRangeInfo;
  };
  tomorrow: {
    value: number;
    range: AirQualityRangeInfo;
  };
};

export type {
  DailyData,
  DailyForecast,
  Pollutant,
  AirQualityRange,
  AirQualityRangeInfo,
  StructuredDailyConcentrationData,
  CalculatedAQIsWithRanges,
};
