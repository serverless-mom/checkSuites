import { test, expect } from '@playwright/test';

test('Page Title', {
    tag: '@critical',
}, async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


