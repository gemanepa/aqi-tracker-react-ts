import { CalculatedAQIsWithRanges } from "@/types/aqi-calc";

const mockAQIsWithRanges: CalculatedAQIsWithRanges = {
  today: {
    value: 50,
    range: {
      status: "Moderate",
      description:
        "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
      color: "#FFD700",
    },
  },
  yesterday: {
    value: 40,
    range: {
      status: "Good",
      description:
        "Air quality is considered satisfactory, and air pollution poses little or no risk.",
      color: "#00FF00",
    },
  },
  tomorrow: {
    value: 60,
    range: {
      status: "Unhealthy for Sensitive Groups",
      description:
        "Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
      color: "#FFA500",
    },
  },
};

export { mockAQIsWithRanges };
