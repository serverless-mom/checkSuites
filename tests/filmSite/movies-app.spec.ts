import { test, expect } from '@playwright/test';

test.describe('Movies App Tests', {
    tag: '@filmSite',
}, () => {
  test('should load homepage and verify main elements', async ({ page }) => {
    // Navigate to the movies app
    await page.goto('https://debs-obrien.github.io/playwright-movies-app');
    
    // Verify the title is present
    await expect(page).toHaveTitle(/Movies App/);
    
    // Verify the search input is present
    const searchInput = page.getByPlaceholder('Search for a movie');
    await expect(searchInput).toBeVisible();
    
    // Verify that the movies grid is present
    const moviesGrid = page.locator('.movies-grid');
    await expect(moviesGrid).toBeVisible();
    
    // Verify that at least one movie card is displayed
    const movieCards = page.locator('.movie-card');
    await expect(movieCards.count()).resolves.toBeGreaterThan(0);
  });
});
