import { render } from "@testing-library/react";
import LatLongRow from "./LatLongRow";
import AqiContext from "../../context/AqiContext";
import { mockResponseOk } from "@/utils/mocks/aqi-api-response";

describe("LatLongRow component", () => {
  it("displays latitude and longitude information correctly", () => {
    const latitude = mockResponseOk.data.city.geo[0];
    const longitude = mockResponseOk.data.city.geo[1];
    const { getByTestId } = render(
      <AqiContext.Provider
        value={{
          response: mockResponseOk,
          isLoading: false,
          isError: false,
          setNewSearch: () => {},
        }}
      >
        <LatLongRow />
      </AqiContext.Provider>
    );

    const latitudeLongitudeInfo = getByTestId(
      "dashboard-latitude-longitude-info"
    );
    expect(latitudeLongitudeInfo).toBeInTheDocument();
    expect(latitudeLongitudeInfo).toHaveTextContent(
      `Latitude: ${latitude} | Longitude: ${longitude}`
    );
  });
});
