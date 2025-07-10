import { test, expect } from '@playwright/test';

test('search for Garfield and verify it appears in the movie list', {
    tag: '@filmSite',
}, async ({ page }) => {
await page.goto('https://debs-obrien.github.io/playwright-movies-app?category=Popular&page=1');
await page.getByRole('img', { name: 'movie ticket' }).click();
await page.getByRole('search').click();
await page.getByRole('textbox', { name: 'Search Input' }).click();
await page.getByRole('textbox', { name: 'Search Input' }).fill('garffeld');
await page.getByRole('textbox', { name: 'Search Input' }).press('Enter');
await page.getByRole('button', { name: 'Search for a movie' }).click();
await expect(page.getByRole('heading', { name: 'There were no results for' })).toBeVisible();
});