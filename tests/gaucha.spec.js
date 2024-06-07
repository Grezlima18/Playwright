const { test, expect } = require('@playwright/test');

test('Verificar a exibição de notícias no site GaúchaZH', async ({ page }) => {
  await page.goto('https://gauchazh.clicrbs.com.br/esportes/ultimas-noticias/');
  await page.click('.gzh-header-top-nav-item');
  await page.click('text=Tricolor');
  
  const newsElements = await page.$$('.headline');
  expect(newsElements.length).toBeGreaterThanOrEqual(5);
});