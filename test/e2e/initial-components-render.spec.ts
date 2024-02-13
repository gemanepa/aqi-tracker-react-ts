import { test, expect } from "@playwright/test";
import translations from "../../src/assets/i18n/en.json" assert { type: "json" };

const { header, dashboard } = translations.body;

test("initial components rendered correctly with proper text", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");
  await expect(page.getByText(header.subtitle)).toBeVisible();
  await expect(page.getByText(dashboard.title)).toBeVisible();
  await expect(page.getByText(dashboard.search.button)).toBeVisible();
});
