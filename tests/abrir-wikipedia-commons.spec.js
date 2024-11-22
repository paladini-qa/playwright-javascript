const { test, expect } = require('@playwright/test');

test('Abrir Wikipedia Commons', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Commons Free media collection' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('Wikimedia Commons', { exact: true })).toBeVisible();
});