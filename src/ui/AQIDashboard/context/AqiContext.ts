import { createContext } from "react";
import { AQIApiResponse } from "@/types/aqi-api-response";

type AqiContextType = {
  setNewSearch: (newSearch: string) => void;
  response: AQIApiResponse | undefined;
  isLoading: boolean;
  isError: boolean;
};
const AqiContext = createContext({} as AqiContextType);

export default AqiContext;
