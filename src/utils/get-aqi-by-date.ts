import { AQIApiResponse } from "../types/aqi-api-response";
import type {
  StructuredDailyConcentrationData,
  CalculatedAQIsWithRanges,
} from "../types/aqi-calc";
import calculateAQI from "./calc-aqi";
import getAqiRange from "./get-aqi-range";

const getAQIByDate = (
  reqResponse: AQIApiResponse
): CalculatedAQIsWithRanges => {
  function getAQIForToday(reqResponse: AQIApiResponse): number {
    return reqResponse.data.aqi;
  }

  function getAQIForYesterdayAndTomorrow(reqResponse: AQIApiResponse): {
    yesterday: number;
    tomorrow: number;
  } {
    const currentDate = new Date(reqResponse.data.time.s); // Current date

    // Calculate date for yesterday and tomorrow
    const yesterdayDate = new Date(currentDate);
    yesterdayDate.setDate(currentDate.getDate() - 1);

    const tomorrowDate = new Date(currentDate);
    tomorrowDate.setDate(currentDate.getDate() + 1);

    const formattedYesterday = formatDate(yesterdayDate);
    const formattedTomorrow = formatDate(tomorrowDate);

    // Filter daily forecast data for yesterday and tomorrow
    const yesterdayForecast = {
      o3: reqResponse.data.forecast.daily.o3.find(
        (entry) => entry.day === formattedYesterday
      ),
      pm10: reqResponse.data.forecast.daily.pm10.find(
        (entry) => entry.day === formattedYesterday
      ),
      pm25: reqResponse.data.forecast.daily.pm25.find(
        (entry) => entry.day === formattedYesterday
      ),
    } as StructuredDailyConcentrationData;

    const tomorrowForecast = {
      o3: reqResponse.data.forecast.daily.o3.find(
        (entry) => entry.day === formattedTomorrow
      ),
      pm10: reqResponse.data.forecast.daily.pm10.find(
        (entry) => entry.day === formattedTomorrow
      ),
      pm25: reqResponse.data.forecast.daily.pm25.find(
        (entry) => entry.day === formattedTomorrow
      ),
    } as StructuredDailyConcentrationData;

    // Calculate AQI for yesterday and tomorrow
    const yesterdayAQI = calculateAQI(yesterdayForecast);
    const tomorrowAQI = calculateAQI(tomorrowForecast);

    return { yesterday: yesterdayAQI || -1, tomorrow: tomorrowAQI || -1 };
  }

  // Helper function to format date as "yyyy-mm-dd"
  function formatDate(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  const todayAQI = getAQIForToday(reqResponse);

  const { yesterday, tomorrow } = getAQIForYesterdayAndTomorrow(reqResponse);

  const calculatedAQIsWithRanges: CalculatedAQIsWithRanges = {
    today: {
      value: todayAQI,
      range: getAqiRange(todayAQI),
    },
    yesterday: {
      value: yesterday,
      range: getAqiRange(yesterday),
    },
    tomorrow: {
      value: tomorrow,
      range: getAqiRange(tomorrow),
    },
  };
  return calculatedAQIsWithRanges;
};

export default getAQIByDate;
