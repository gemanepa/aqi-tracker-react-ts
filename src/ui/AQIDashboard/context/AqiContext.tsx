import { createContext, useState, ReactNode } from "react";
import { AQIApiResponse } from "@/types/aqi-api-response";
import { useQuery } from "react-query";
import getAirQualityStats from "@/api/get-air-quality";
import getAQIByDate from "@/utils/get-aqi-by-date";
import type { CalculatedAQIsWithRanges } from "@/types/aqi-calc";

type AqiContextType = {
  setNewSearch: (newSearch: string) => void;
  response: AQIApiResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  aqis: CalculatedAQIsWithRanges | null;
};

interface AqiProviderProps {
  children: ReactNode;
}

const AqiContext = createContext({} as AqiContextType);

export const AqiProvider: React.FC<AqiProviderProps> = ({ children }) => {
  const [newSearch, setNewSearch] = useState("here");

  const {
    data: response,
    isLoading,
    isError,
  } = useQuery(["airQualityStats", newSearch], () =>
    getAirQualityStats(newSearch)
  );

  const aqis: CalculatedAQIsWithRanges | null = response?.data?.aqi
    ? getAQIByDate(response as AQIApiResponse)
    : null;

  const contextObj = {
    response,
    isLoading,
    isError,
    setNewSearch,
    aqis,
  };

  return (
    <AqiContext.Provider value={contextObj}>{children}</AqiContext.Provider>
  );
};

export default AqiContext;
