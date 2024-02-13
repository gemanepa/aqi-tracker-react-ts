import { render } from "@testing-library/react";
import Loader from "./Loader";
import AqiContext from "../context/AqiContext";
import { mockResponseOk } from "@/utils/mocks/aqi-api-response";

describe("Loader component", () => {
  it("should render Loader when isLoading is true", () => {
    const isLoading = true;
    const { getByTestId } = render(
      <AqiContext.Provider
        value={{
          isLoading,
          setNewSearch: () => {},
          response: mockResponseOk,
          isError: false,
        }}
      >
        <Loader />
      </AqiContext.Provider>
    );
    const loaderContainer = getByTestId("loader-container");
    expect(loaderContainer).toBeInTheDocument();
  });

  it("should not render Loader when isLoading is false", () => {
    const isLoading = false;
    const { queryByTestId } = render(
      <AqiContext.Provider
        value={{
          isLoading,
          setNewSearch: () => {},
          response: mockResponseOk,
          isError: false,
        }}
      >
        <Loader />
      </AqiContext.Provider>
    );
    const loaderContainer = queryByTestId("loader-container");
    expect(loaderContainer).toBeNull();
  });
});
