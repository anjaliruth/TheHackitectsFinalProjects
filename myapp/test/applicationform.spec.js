import { test, expect } from "@playwright/test";
//
test("should allow the user to click on the application form button and go to the application form page", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await page.click("text=Application Form");
  await expect(page).toHaveURL("http://localhost:3000/application-form");
});

// Testing input text fields

test("typing values in textboxes and click Button", async ({ page }) => {
  const inputFields = [
    { label: "First Name:", value: "John" },
    { label: "Last Name:", value: "Doe" },
    { label: "Dog ID:", value: "1" },
    { label: "Address:", value: "78 peewee Way" },
    { label: "Postcode:", value: "gt3 6bm" },
    { label: "Country:", value: "UK" },
    { label: "City:", value: "London" },
  ];

  await page.goto("http://localhost:3000/application-form");

  for (const { label, value } of inputFields) {
    const inputBox = page.getByLabel(label);
    await inputBox.fill(value);
    await expect(inputBox).toHaveValue(value);
  }
  await page.click("text=Submit");
  await expect(page).toHaveURL("http://localhost:3000/application-form");
});
