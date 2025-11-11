import { expect, test } from '@playwright/test';

test('home hero renders', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Premium ready-to-serve cocktails', { exact: false })).toBeVisible();
});

test('cocktail filters update URL', async ({ page }) => {
  await page.goto('/cocktails');
  await page.getByRole('button', { name: 'fris' }).click();
  await expect(page).toHaveURL(/taste=fris/);
});

test('lead form validates required fields', async ({ page }) => {
  await page.goto('/horeca');
  await page.getByRole('button', { name: 'Verstuur' }).click();
  await expect(page.getByText('Naam is verplicht')).toBeVisible();
});

test('shop page loads products', async ({ page }) => {
  await page.goto('/shop');
  await expect(page.getByText('Ready-to-serve')).toBeVisible();
});
