const { test, expect, devices, chromium } = require('@playwright/test');

const WIKI_PESQUISA = 'I\'m Still Here (2024 film)';

test('Pesquisar Wiki Mobile', async () => {
    const iPhone12 = devices['iPhone 12'];
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        ...iPhone12,
        baseURL: 'https://www.wikipedia.org'
    });
    const page = await context.newPage();
    await page.goto('/');
    await page.getByLabel('Search Wikipedia').fill(WIKI_PESQUISA);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#firstHeading')).toHaveText(WIKI_PESQUISA);
});
