import { test, expect } from '@playwright/test';

test('search for Garfield and verify it appears in the movie list', {
    tag: '@filmSite',
}, async ({ page }) => {
    await page.goto('https://debs-obrien.github.io/playwright-movies-app');
    const searchInput = page.getByPlaceholder('Search movies');
    await searchInput.fill('Garfield');
    // Wait for results to update
    await expect(page.getByText('Garfield')).toBeVisible();
});