import { AQIApiResponse } from "@/types/aqi-api-response";

const mockResponseOk: AQIApiResponse = {
  status: "ok",
  data: {
    aqi: 50,
    idx: 123,
    attributions: [{ url: "http://example.com", name: "Example Attribution" }],
    city: {
      geo: [0, 0],
      name: "Mock City",
      url: "http://mockurl.com",
      location: "Mock Location",
    },
    dominentpol: "pm25",
    iaqi: {
      pm25: { v: 25 },
      o3: { v: 30 },
      // Add more IAQI properties as needed
    },
    time: {
      s: "2024-02-12 14:00:00",
      tz: "+00:00",
      v: 1644703200,
      iso: "2024-02-12T14:00:00+00:00",
    },
    forecast: {
      daily: {
        o3: [
          { avg: 40, day: "Monday", max: 50, min: 30 },
          { avg: 35, day: "Tuesday", max: 45, min: 25 },
        ],
        pm10: [
          { avg: 20, day: "Monday", max: 30, min: 10 },
          { avg: 25, day: "Tuesday", max: 35, min: 15 },
        ],
        pm25: [
          { avg: 15, day: "Monday", max: 25, min: 5 },
          { avg: 18, day: "Tuesday", max: 28, min: 8 },
        ],
      },
    },
    debug: { sync: "synchronized" },
  },
};

export { mockResponseOk };
