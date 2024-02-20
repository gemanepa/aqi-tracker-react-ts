import { render } from "@testing-library/react";
import FormContainer from "./FormContainer";
import * as useAqiContextModule from "../../hooks/useAqiContext";
import { mockResponseOk } from "@/utils/mocks/aqi-api-response";
import { mockAQIsWithRanges } from "@/utils/mocks/aqi-calc";

jest.mock("@/utils/constants/tokens", () => ({
  AQI_API_TOKEN: "mockTokenValue",
}));
jest.mock("../../hooks/useAqiContext");

describe("FormContainer component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules(); // Reset all module mocks between tests
  });

  it("renders correctly", () => {
    const mockContext = {
      isLoading: false,
      setNewSearch: jest.fn(),
      response: mockResponseOk,
      isError: false,
      aqis: mockAQIsWithRanges,
    };
    jest.mocked(useAqiContextModule.default).mockReturnValue(mockContext);

    const { getByTestId } = render(<FormContainer />);
    const formContainerElement = getByTestId("dashboard-form-container");
    expect(formContainerElement).toBeInTheDocument();
  });
});
