import { render, RenderResult } from "@testing-library/react";
import FormContainer from "./FormContainer";
import AqiContext from "../../context/AqiContext";
import { mockResponseOk } from "@/utils/mocks/aqi-api-response";

describe("FormContainer component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <AqiContext.Provider
        value={{
          isLoading: false,
          setNewSearch: () => {},
          response: mockResponseOk,
          isError: false,
        }}
      >
        <FormContainer />
      </AqiContext.Provider>
    );
  });

  it("renders correctly", () => {
    const { getByTestId } = component;
    const formContainerElement = getByTestId("dashboard-form-container");
    expect(formContainerElement).toBeInTheDocument();
  });
});
