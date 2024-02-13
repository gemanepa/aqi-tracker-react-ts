import { render } from "@testing-library/react";
import AirQualitySquares from "./AirQualitySquares";

describe("AirQualitySquares component", () => {
  const mockAQIsWithRanges = {
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

  it("renders air quality squares with correct values", () => {
    const { getByText, getByTestId } = render(
      <AirQualitySquares {...mockAQIsWithRanges} />
    );
    expect(getByText("50")).toBeInTheDocument();
    expect(getByText("40")).toBeInTheDocument();
    expect(getByText("60")).toBeInTheDocument();

    const todaySquare = getByTestId("today-square");
    const yesterdaySquare = getByTestId("yesterday-square");
    const tomorrowSquare = getByTestId("tomorrow-square");

    expect(todaySquare).toBeInTheDocument();
    expect(yesterdaySquare).toBeInTheDocument();
    expect(tomorrowSquare).toBeInTheDocument();
  });
});
