import { render } from "@testing-library/react";
import AppLayout from "./index";

describe("AppLayout component", () => {
  it("renders Header and AQIDashboard components correctly", () => {
    // Arrange
    const headerText = "This is the header";
    const aqiDashboardText = "This is the AQI dashboard";

    // Act
    const { getByTestId } = render(
      <AppLayout
        Header={<div>{headerText}</div>}
        AQIDashboard={<div>{aqiDashboardText}</div>}
      />
    );

    // Assert
    const appLayout = getByTestId("app-layout");
    expect(appLayout).toBeInTheDocument();

    const headerContainer = getByTestId("header-container");
    expect(headerContainer).toBeInTheDocument();
    expect(headerContainer).toHaveTextContent(headerText);

    const aqiDashboardContainer = getByTestId("aqi-dashboard-container");
    expect(aqiDashboardContainer).toBeInTheDocument();
    expect(aqiDashboardContainer).toHaveTextContent(aqiDashboardText);
  });
});
