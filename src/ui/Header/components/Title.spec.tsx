import { render } from "@testing-library/react";
import HeaderTitle from "./Title";

jest.mock("./Logo", () => () => <div data-testid="mock-logo" />);

// Mock translations and formatTitle function
jest.mock("@/assets/i18n/en.json", () => ({
  body: {
    header: {
      title: "Mock Title",
    },
  },
}));

jest.mock("../utils/formatTitle", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    firstRow: "Mock First Row",
    secondRow: "Mock Second Row",
  }),
}));

describe("HeaderTitle component", () => {
  it("renders title with correct text", () => {
    const { getByText, getByTestId } = render(<HeaderTitle />);
    const firstRow = getByText("Mock First Row");
    const secondRow = getByText("Mock Second Row");
    const logo = getByTestId("mock-logo");

    expect(firstRow).toBeInTheDocument();
    expect(secondRow).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});
