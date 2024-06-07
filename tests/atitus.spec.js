const { test, expect } = require('@playwright/test');

test('Verificar a navegação e funcionalidades no site da Atitus Educação', async ({ page }) => {
  await page.goto('https://atitus.edu.br');
  
  await page.click('text=Atitus');
  await page.click('text=Cursos');
  await page.click('text=Diferenciais');
  await page.click('text=Inovação');

  const searchInput = await page.$('.search__input');
  const contactForm = await page.$('.contact-form');
  expect(searchInput).not.toBeNull();
  expect(contactForm).not.toBeNull();
});