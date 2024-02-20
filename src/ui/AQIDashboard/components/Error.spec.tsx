import { render } from "@testing-library/react";
import Error from "./Error";
import * as useAqiContextModule from "../hooks/useAqiContext";
import { mockResponseOk } from "@/utils/mocks/aqi-api-response";
import { mockAQIsWithRanges } from "@/utils/mocks/aqi-calc";

jest.mock("@/utils/constants/tokens", () => ({
  AQI_API_TOKEN: "mockTokenValue",
}));
jest.mock("../hooks/useAqiContext");

describe.only("Error component", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mock calls between tests
    jest.resetModules(); // Reset all module mocks between tests
  });

  it("should render error message when isError is true", () => {
    jest.mocked(useAqiContextModule.default).mockReturnValue({
      isError: true,
      isLoading: false,
      response: undefined,
      setNewSearch: jest.fn(),
      aqis: mockAQIsWithRanges,
    });

    const { getByTestId } = render(<Error />);
    const errorContainer = getByTestId("error-container");
    expect(errorContainer).toBeInTheDocument();
  });

  it("should not render anything when isLoading is true", () => {
    jest.mocked(useAqiContextModule.default).mockReturnValue({
      isError: false,
      isLoading: true,
      response: undefined,
      setNewSearch: jest.fn(),
      aqis: mockAQIsWithRanges,
    });

    const { container } = render(<Error />);
    expect(container.firstChild).toBeNull();
  });

  // it("should render no location error message when there is no city data", () => {
  //   jest.mocked(useAqiContextModule.default).mockReturnValue({
  //     isError: false,
  //     isLoading: false,
  //     response: { data: { city: null } },
  //     setNewSearch: jest.fn(),
  //   });

  //   const { getByText } = render(<Error />);
  //   const errorText = getByText("No location information available");
  //   expect(errorText).toBeInTheDocument();
  // });

  // it("should render no forecast error message when there is no forecast data", () => {
  //   jest.mocked(useAqiContextModule.default).mockReturnValue({
  //     isError: false,
  //     isLoading: false,
  //     response: { data: { forecast: null } },
  //     setNewSearch: jest.fn(),
  //   });

  //   const { getByText } = render(<Error />);
  //   const errorText = getByText("No forecast information available");
  //   expect(errorText).toBeInTheDocument();
  // });

  it("should not render anything when there is no error and both city and forecast data are present", () => {
    jest.mocked(useAqiContextModule.default).mockReturnValue({
      isError: false,
      isLoading: false,
      response: mockResponseOk,
      setNewSearch: jest.fn(),
      aqis: mockAQIsWithRanges,
    });

    const { container } = render(<Error />);
    expect(container.firstChild).toBeNull();
  });
});
