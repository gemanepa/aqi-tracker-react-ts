import { render } from "@testing-library/react";
import LocationParagraph from "./LocationParagraph";
import * as useAqiContextModule from "../../hooks/useAqiContext";
import { mockResponseOk } from "@/utils/mocks/aqi-api-response";
import { mockAQIsWithRanges } from "@/utils/mocks/aqi-calc";

jest.mock("@/utils/constants/tokens", () => ({
  AQI_API_TOKEN: "mockTokenValue",
}));
jest.mock("../../hooks/useAqiContext");

describe("LocationParagraph component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it("displays location information correctly when city and forecast are available", () => {
    const city = mockResponseOk.data.city.name;
    const mockContext = {
      response: mockResponseOk,
      isLoading: false,
      isError: false,
      setNewSearch: jest.fn(),
      aqis: mockAQIsWithRanges,
    };
    jest.mocked(useAqiContextModule.default).mockReturnValue(mockContext);

    const { getByTestId } = render(<LocationParagraph />);
    const locationParagraph = getByTestId("location-paragraph");

    expect(locationParagraph.textContent).toBe(`Air Quality in ${city}`);
  });

  it("does not render anything when city or forecast are not available", () => {
    const mockContext = {
      response: {
        ...mockResponseOk,
        data: {
          ...mockResponseOk.data,
          city: {
            ...mockResponseOk.data.city,
            name: "",
          },
          forecast: undefined,
        },
      },
      isLoading: false,
      isError: false,
      setNewSearch: jest.fn(),
      aqis: mockAQIsWithRanges,
    };
    jest.mocked(useAqiContextModule.default).mockReturnValue(mockContext);

    const { container } = render(<LocationParagraph />);
    expect(container.firstChild).toBeNull();
  });
});
