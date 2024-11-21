const {test, expect} = require('@playwright/test');

test('Visualizar Data', async ({page}) => {

    await page.goto('https://news.google.com/');

    const titulo = await page.locator('[role="doc-subtitle"]').innerText();

    const data = new Date();

    function formatDateToReceivedFormat(date) {
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const dataFormatada = formatDateToReceivedFormat(data);

    expect(titulo).toBe(dataFormatada);
});
