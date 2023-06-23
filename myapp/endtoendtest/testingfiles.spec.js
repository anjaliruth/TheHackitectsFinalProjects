import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Paws For Affection");
});



test('should allow the user to scroll down the page onto the dog grid', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.evaluate(() => window.scrollTo(0, 500)); // Scroll to the specified position

  const scrollY = await page.evaluate(() => window.scrollY); // Get the current scroll position
  expect(scrollY).toBe(500);
});

test('find the more info button on the dog card and click on it', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const moreInfoButton = await page.waitForSelector('[aria-label="moreinfo"]'); // Wait for the button to be available
  await moreInfoButton.click();
});

test ('should allow the user to click on the more info button and see the dog details', async ({ page }) => {
await page.goto('http://localhost:3000/');
const button = await page.getByRole('button').nth(0);
await button.click();
const dogID = await page.getByRole('h2');
expect(page).toHaveURL(dogID)

//check to seee if the dog id in h2 matches the id in the url

// expect(h2).toHaveId(dogName),expect(page).toHaveURL(dogID)

});

// find elemt id for eith the div or p tage for the dog 


