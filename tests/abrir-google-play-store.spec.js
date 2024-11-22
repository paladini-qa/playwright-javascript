const { test, expect } = require('@playwright/test');

test('Abrir Google Play Store', async ({ page }) => {
    await page.goto('/');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Google Play Store' }).click();
    const page1 = await page1Promise;
    await expect(page1.getByText('Wikipedia', { exact: true })).toBeVisible();
    await expect(page1.getByLabel('Install')).toBeVisible();
    await expect(page1.url()).toContain('play.google.com');
});