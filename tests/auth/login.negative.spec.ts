import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test.describe('@regression @negative Login Negative Cases', () => {
  test('Login with locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.assertLoginFailed('locked out');
  });
});
