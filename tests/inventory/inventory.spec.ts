import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../pages/inventory.page';

test.describe('@regression @inventory Inventory Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Sudah login via storageState
    await page.goto('/inventory.html');
  });

  test('User dapat melakukan sorting produk A-Z', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.assertOnInventoryPage();

    await inventoryPage.sortBy('az');

    const productNames = await inventoryPage.getProductNames();
    const sortedNames = [...productNames].sort();

    expect(productNames).toEqual(sortedNames);
  });

  test('User dapat menambahkan produk ke cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.assertOnInventoryPage();

    await inventoryPage.addProductToCartByName(
      'Sauce Labs Backpack'
    );

    await inventoryPage.assertCartCount(1);
  });

  test('User dapat menambahkan dan menghapus produk dari cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.assertOnInventoryPage();

    await inventoryPage.addProductToCartByName(
      'Sauce Labs Bike Light'
    );
    await inventoryPage.assertCartCount(1);

    await inventoryPage.removeProductFromCartByName(
      'Sauce Labs Bike Light'
    );
    await inventoryPage.assertCartCount(0);
  });
});
