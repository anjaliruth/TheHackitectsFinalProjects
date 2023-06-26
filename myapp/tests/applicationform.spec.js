import { test, expect, screen, page } from "@playwright/test";

test("should allow the user to click on the application form button and go to the application form page", async () => {
  await page.goto("http://localhost:3000/");
  const button = await screen.getByRole("button").nth(0);
  await button.click();
});

// Testing input text fields

test("typing first name in the textbox", async () => {
  await page.goto("http://localhost:3000/application-form");
  const inputBox = screen.getByRole("input", { name: "first_name" });
  await inputBox.type("Keelie");
  await expect(inputBox).toHaveValue("Keelie");
});
