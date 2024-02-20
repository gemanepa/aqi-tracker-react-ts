import { render } from "@testing-library/react";
import Loader from "./Loader";
import * as useAqiContextModule from "../hooks/useAqiContext";
import { mockResponseOk } from "@/utils/mocks/aqi-api-response";
import { mockAQIsWithRanges } from "@/utils/mocks/aqi-calc";

jest.mock("@/utils/constants/tokens", () => ({
  AQI_API_TOKEN: "mockTokenValue",
}));
jest.mock("../hooks/useAqiContext");

describe("Loader component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render Loader when isLoading is true", () => {
    const mockContext = {
      isLoading: true,
      setNewSearch: jest.fn(),
      response: mockResponseOk,
      isError: false,
      aqis: mockAQIsWithRanges,
    };
    jest.mocked(useAqiContextModule.default).mockReturnValue(mockContext);

    const { getByTestId } = render(<Loader />);
    expect(getByTestId("loader-container")).toBeInTheDocument();
  });

  it("should not render Loader when isLoading is false", () => {
    const mockContext = {
      isLoading: false,
      setNewSearch: jest.fn(),
      response: mockResponseOk,
      isError: false,
      aqis: mockAQIsWithRanges,
    };
    jest.mocked(useAqiContextModule.default).mockReturnValue(mockContext);

    const { queryByTestId } = render(<Loader />);
    expect(queryByTestId("loader-container")).toBeNull();
  });
});
