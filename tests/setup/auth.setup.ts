import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test('Authenticate standard user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.loginAsStandardUser();
  await loginPage.assertLoginSuccess();

  await page.context().storageState({
    path: 'storage/standard-user.json',
  });
});
