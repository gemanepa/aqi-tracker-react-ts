import getAQI from "./get-air-quality";
import { mockResponseOk } from "@/utils/mocks/aqi-api-response.ts";
import fetchMock from "jest-fetch-mock";

// Mock AQI_API_TOKEN constant
jest.mock("@/utils/constants/tokens", () => ({
  AQI_API_TOKEN: "mockTokenValue",
}));

// Set up fetch mocking
fetchMock.enableMocks();

// Mock the fetch function
fetchMock.mockResponseOnce(JSON.stringify(mockResponseOk));

describe("getAQI function", () => {
  it("fetches AQI data for a city", async () => {
    const cityName = "MockCity";
    const response = await getAQI(cityName);

    expect(fetch).toHaveBeenCalledWith(
      `https://api.waqi.info/feed/${cityName}/?token=mockTokenValue`
    );
    expect(response).toEqual(mockResponseOk);
  });

  it("throws an error if response is not ok", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404 });

    const cityName = "MockCity";
    await expect(getAQI(cityName)).rejects.toThrow(
      `Failed to fetch data for ${cityName}`
    );
  });
});
