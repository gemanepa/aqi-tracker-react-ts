import { render } from "@testing-library/react";
import HeaderSubtitle from "./HeaderSubtitle";

// Mocking the translations to provide a predictable value
jest.mock("@/assets/i18n/en.json", () => ({
  body: {
    header: {
      subtitle: "Test Subtitle",
    },
  },
}));

describe("HeaderSubtitle Component", () => {
  test("renders with correct subtitle text", () => {
    const { getByTestId } = render(<HeaderSubtitle />);
    const subtitleElement = getByTestId("subheader");
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement.textContent).toBe("Test Subtitle");
  });

  // Add more tests if needed
});
