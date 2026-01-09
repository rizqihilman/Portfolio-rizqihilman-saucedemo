import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test.describe('@smoke @auth Login Positive Case', () => {
  test('User berhasil login sebagai standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Given: user berada di halaman login
    await loginPage.goto();

    // When: user login dengan kredensial valid
    await loginPage.loginAsStandardUser();

    // Then: user berhasil masuk ke halaman inventory
    await loginPage.assertLoginSuccess();
  });
});
