import { render } from "@testing-library/react";
import AirQualitySquares from "./AirQualitySquares";
import * as useAqiContextModule from "../../hooks/useAqiContext";
import { mockResponseOk } from "@/utils/mocks/aqi-api-response";
import { mockAQIsWithRanges } from "@/utils/mocks/aqi-calc";

jest.mock("@/utils/constants/tokens", () => ({
  AQI_API_TOKEN: "mockTokenValue",
}));
jest.mock("../../hooks/useAqiContext");

describe("AirQualitySquares component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it("renders air quality squares with correct values", () => {
    const mockContext = {
      response: mockResponseOk,
      isLoading: false,
      isError: false,
      setNewSearch: jest.fn(),
      aqis: mockAQIsWithRanges,
    };
    jest.mocked(useAqiContextModule.default).mockReturnValue(mockContext);

    const { getByText, getByTestId } = render(<AirQualitySquares />);
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
