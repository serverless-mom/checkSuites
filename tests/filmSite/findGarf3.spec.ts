import { test, expect } from '@playwright/test';

test('should find Garfield movie in search results', {
    tag: '@filmSite',
}, async ({ page }) => {
  // Navigate to the movies app
  await page.goto('https://debs-obrien.github.io/playwright-movies-app');
  
  // Find and fill the search input
  const searchInput = page.getByPlaceholder('Search for movies');
  await searchInput.fill('Garfield');
  
  // Wait for search results to update
  await page.waitForResponse(response => 
    response.url().includes('api.themoviedb.org') && 
    response.status() === 200
  );
  
  // Verify Garfield movie is in the results
  const movieCard = page.getByRole('heading', { name: /garfield/i });
  await expect(movieCard).toBeVisible();
});