import { render } from "@testing-library/react";
import AirQualityDescription from "./AirQualityDescription";
import * as useAqiContextModule from "../../hooks/useAqiContext";
import { mockResponseOk } from "@/utils/mocks/aqi-api-response";

import { mockAQIsWithRanges } from "@/utils/mocks/aqi-calc";

jest.mock("../../hooks/useAqiContext");
jest.mock("@/utils/constants/tokens", () => ({
  AQI_API_TOKEN: "mockTokenValue",
}));

describe("AirQualityDescription component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it("renders air quality description with correct color and text", () => {
    const mockContext = {
      response: mockResponseOk,
      isLoading: false,
      isError: false,
      setNewSearch: jest.fn(),
      aqis: mockAQIsWithRanges,
    };
    jest.mocked(useAqiContextModule.default).mockReturnValue(mockContext);

    const { getByText } = render(<AirQualityDescription />);
    const descriptionParagraph = getByText(
      mockAQIsWithRanges.today.range.description
    );
    expect(descriptionParagraph).toBeInTheDocument();
    expect(descriptionParagraph).toHaveStyle(
      `color: ${mockAQIsWithRanges.today.range.color}`
    );
  });

  it("does not render anything if today's AQI data is not available", () => {
    const mockContext = {
      response: mockResponseOk,
      isLoading: false,
      isError: false,
      setNewSearch: jest.fn(),
      aqis: null,
    };
    jest.mocked(useAqiContextModule.default).mockReturnValue(mockContext);

    const { container } = render(<AirQualityDescription />);
    expect(container.firstChild).toBeNull();
  });
});
