const { test, expect } = require('@playwright/test');

test('Verificar mensagem no carrinho vazio no KaBuM!', async ({ page }) => {
  await page.goto('https://www.kabum.com.br');
  await page.click('.IconHeaderCart');

  const cartMessage = await page.textContent('#main-content b');
  expect(cartMessage).toContain('O seu carrinho está vazio');
});
