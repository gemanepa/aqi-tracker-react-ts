import { render } from "@testing-library/react";
import LatLongRow from "./LatLongRow";
import * as useAqiContextModule from "../../hooks/useAqiContext";
import { mockResponseOk } from "@/utils/mocks/aqi-api-response";
import { mockAQIsWithRanges } from "@/utils/mocks/aqi-calc";

jest.mock("@/utils/constants/tokens", () => ({
  AQI_API_TOKEN: "mockTokenValue",
}));
jest.mock("../../hooks/useAqiContext");

describe("LatLongRow component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it("displays latitude and longitude information correctly", () => {
    const latitude = mockResponseOk.data.city.geo[0];
    const longitude = mockResponseOk.data.city.geo[1];

    const mockContext = {
      response: mockResponseOk,
      isLoading: false,
      isError: false,
      setNewSearch: jest.fn(),
      aqis: mockAQIsWithRanges,
    };
    jest.mocked(useAqiContextModule.default).mockReturnValue(mockContext);

    const { getByTestId } = render(<LatLongRow />);
    const latitudeLongitudeInfo = getByTestId(
      "dashboard-latitude-longitude-info"
    );
    expect(latitudeLongitudeInfo).toBeInTheDocument();
    expect(latitudeLongitudeInfo).toHaveTextContent(
      `Latitude: ${latitude} | Longitude: ${longitude}`
    );
  });
});
