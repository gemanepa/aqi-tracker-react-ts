interface Attribution {
  url: string;
  name: string;
}

interface City {
  geo: [number, number];
  name: string;
  url: string;
  location: string;
}

interface IAQI {
  co?: { v: number };
  h?: { v: number };
  no2?: { v: number };
  o3?: { v: number };
  p?: { v: number };
  pm10?: { v: number };
  pm25?: { v: number };
  so2?: { v: number };
  t?: { v: number };
  w?: { v: number };
}

interface Time {
  s: string;
  tz: string;
  v: number;
  iso: string;
}

interface Forecast {
  daily: {
    o3: { avg: number; day: string; max: number; min: number }[];
    pm10: { avg: number; day: string; max: number; min: number }[];
    pm25: { avg: number; day: string; max: number; min: number }[];
  };
}

interface Debug {
  sync: string;
}

interface AQIApiResponse {
  status: string;
  data: {
    aqi: number;
    idx: number;
    attributions: Attribution[];
    city: City;
    dominentpol: string;
    iaqi: IAQI;
    time: Time;
    forecast?: Forecast;
    debug: Debug;
  };
}

interface queryAQIResponse {
  data: AQIApiResponse;
  status: string;
  isError: boolean;
  isLoading: boolean;
}

export type { AQIApiResponse, queryAQIResponse };
