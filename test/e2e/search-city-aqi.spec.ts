import { test, expect } from "@playwright/test";
import translations from "../../src/assets/i18n/en.json" assert { type: "json" };

const { dashboard } = translations.body;

test("make new request to specific location", async ({ page }) => {
  const city = "New York";
  await page.goto("http://localhost:5173/");
  await page.getByTestId("dashboard-search-input").fill(city);
  await page.getByTestId("dashboard-search-button").click();
  await expect(
    page.getByText(`${dashboard.airQualityIn} ${city}`)
  ).toBeVisible();
});
