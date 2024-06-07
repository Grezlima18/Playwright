const { test, expect } = require('@playwright/test');

test('Adicionar primeiro produto ao carrinho e verificar quantidade no Sauce Demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('.shopping_cart_link');

  const cartQuantity = await page.textContent('.cart_quantity');
  expect(cartQuantity).toBe('1');
});
