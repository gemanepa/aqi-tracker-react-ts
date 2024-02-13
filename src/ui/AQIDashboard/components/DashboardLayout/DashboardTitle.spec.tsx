import { render } from "@testing-library/react";
import DashboardTitle from "./DashboardTitle";
import translations from "@/assets/i18n/en.json";

const { dashboard } = translations.body;

describe("DashboardTitle component", () => {
  it("renders with correct text content", () => {
    const { getByText } = render(<DashboardTitle />);
    const titleElement = getByText(dashboard.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("applies correct styles", () => {
    const { getByText } = render(<DashboardTitle />);
    const titleElement = getByText(dashboard.title);
    expect(titleElement).toHaveStyle(`
      color: #4689c8;
      text-align: center;
    `);
  });
});
