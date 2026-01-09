import { Page, expect } from '@playwright/test';

export async function loginAsStandardUser(page: Page) {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill(
    process.env.SAUCE_USERNAME || 'standard_user'
  );
  await page.getByPlaceholder('Password').fill(
    process.env.SAUCE_PASSWORD || 'secret_sauce'
  );

  await page.getByRole('button', { name: 'Login' }).click();

  // Minimal assertion (CI-safe)
  await expect(page).not.toHaveURL(/saucedemo\.com\/$/);
}
