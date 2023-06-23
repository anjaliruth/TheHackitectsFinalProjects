import { test, expect } from "@playwright/test";

test("should allow the user to click on the application form button and which goes to the application form page", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/application-form");
  const button = await page.getByRole("button").nth(0);
  await button.click();
});

// Testing input text fields

test("typing first name in the textbox", async ({ page }) => {
  await page.goto("http://localhost:3000/application-form");
  const inputBox = await page.getByRole("input", { name: "first_name" });
  await inputBox.text("Keelie");
  await expect(inputBox).toHaveValue("Keelie");
});
