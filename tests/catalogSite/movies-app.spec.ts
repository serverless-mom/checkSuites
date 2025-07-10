import { test, expect } from '@playwright/test';

test.describe('Movies App Tests', {
  tag: '@filmSite',
}, () => {
  test('should load homepage and verify main elements', async ({ page }) => {
    await page.goto('https://debs-obrien.github.io/playwright-movies-app?category=Popular&page=1');
    await page.getByRole('menu').locator('span').nth(1).click();
    await page.getByRole('link', { name: 'Action' }).click();
    await expect(page.getByRole('link', { name: 'poster of Despicable Me 4' })).toBeVisible();
    await expect(page.getByLabel('movies')).toContainText('Despicable Me 4');
  });
});
