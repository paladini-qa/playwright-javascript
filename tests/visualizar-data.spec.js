const {test, expect} = require('@playwright/test');

test('Visualizar Título', async ({page}) => {

    await page.goto('https://news.google.com/');

    const titulo = await page.innerText('h1');

    expect(titulo).toBe('Your briefing');
});
