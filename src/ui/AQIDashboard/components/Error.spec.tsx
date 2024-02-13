import { render } from "@testing-library/react";
import Error from "./Error";
import AqiContext from "../context/AqiContext";
import { mockResponseOk } from "@/utils/mocks/aqi-api-response";

describe("Error component", () => {
  it("should render error message when isError is true", () => {
    const isError = true;
    const { getByTestId } = render(
      <AqiContext.Provider
        value={{
          isError,
          isLoading: false,
          response: undefined,
          setNewSearch: () => {},
        }}
      >
        <Error />
      </AqiContext.Provider>
    );
    const errorContainer = getByTestId("error-container");
    expect(errorContainer).toBeInTheDocument();
  });

  it("should not render anything when isLoading is true", () => {
    const isLoading = true;
    const { container } = render(
      <AqiContext.Provider
        value={{
          isLoading,
          isError: false,
          response: undefined,
          setNewSearch: () => {},
        }}
      >
        <Error />
      </AqiContext.Provider>
    );
    expect(container.firstChild).toBeNull();
  });

  it("should not render anything when there is no error and data is present", () => {
    const isError = false;
    const { container } = render(
      <AqiContext.Provider
        value={{
          isError,
          isLoading: false,
          response: mockResponseOk,
          setNewSearch: () => {},
        }}
      >
        <Error />
      </AqiContext.Provider>
    );
    expect(container.firstChild).toBeNull();
  });
});
