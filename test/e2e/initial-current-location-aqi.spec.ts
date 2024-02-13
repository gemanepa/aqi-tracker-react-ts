import { test, expect } from "@playwright/test";
import translations from "../../src/assets/i18n/en.json" assert { type: "json" };

const { dashboard } = translations.body;

test("initial request loads successfully", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page.getByText(dashboard.yesterday)).toBeVisible();
  await expect(page.getByText(dashboard.today)).toBeVisible();
  await expect(page.getByText(dashboard.tomorrow)).toBeVisible();
  await expect(page.getByText(dashboard.latitude)).toBeVisible();
  await expect(page.getByText(dashboard.longitude)).toBeVisible();
});
