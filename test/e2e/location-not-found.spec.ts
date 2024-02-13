import { test, expect } from "@playwright/test";

test("make new request to city that does not exist", async ({ page }) => {
  const city = "Macchu Picchu";
  await page.goto("http://localhost:5173/");
  await page.getByTestId("dashboard-search-input").fill(city);
  await page.getByTestId("dashboard-search-button").click();
  await expect(page.getByText("Unknown station")).toBeVisible();
});
