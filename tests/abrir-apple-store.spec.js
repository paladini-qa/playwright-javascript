const { test, expect } = require('@playwright/test');

test('Abrir Apple Store', async ({ page }) => {
    await page.goto('/');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Apple App Store' }).click();
    const page1 = await page1Promise;
    await expect(page1.getByRole('heading', { name: 'Wikipedia 4+' })).toBeVisible();
    await expect(page1.url()).toContain('apps.apple.com/');
});