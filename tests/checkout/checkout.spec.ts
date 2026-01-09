import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';
import { CartPage } from '../../pages/cart.page';
import { CheckoutPage } from '../../pages/checkout.page';

test.describe('Checkout End-to-End', () => {
  test(
    'User berhasil checkout produk sampai selesai',
    { tag: ['@e2e', '@checkout', '@regression'] },
    async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);

      // Login
      await loginPage.goto();
      await loginPage.login(
        'standard_user',
        'secret_sauce'
      );
      await inventoryPage.assertOnInventoryPage();

      // Add to Cart
      await inventoryPage.addProductToCartByName(
        'Sauce Labs Backpack'
      );
      await inventoryPage.openCart();

      // Cart
      await cartPage.assertOnCartPage();
      await cartPage.assertItemCount(1);
      await cartPage.checkout();

      // Checkout Step One
      await checkoutPage.fillCustomerInformation(
        'Rizqi',
        'QA',
        '40123'
      );

      // Checkout Step Two
      await checkoutPage.assertSummaryItemCount(1);
      await checkoutPage.finishCheckout();

      // Checkout Complete
      await checkoutPage.assertCheckoutComplete();
    }
  );
});
