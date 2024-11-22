const { test, expect } = require('@playwright/test');

const WIKI_PESQUISA = 'I\'m Still Here (2024 film)';

test('Pesquisar wiki', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Search Wikipedia').fill(WIKI_PESQUISA);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#firstHeading')).toHaveText(WIKI_PESQUISA);
});