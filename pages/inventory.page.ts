import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  openCart() {
      throw new Error('Method not implemented.');
  }
  readonly page: Page;
  readonly productTitles: Locator;
  readonly sortDropdown: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitles = page.locator('.inventory_item_name');
    this.sortDropdown = page.locator('[data-test="product_sort_container"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async assertOnInventoryPage() {
    await expect(this.page).toHaveURL(/inventory\.html/);
  }

  async getProductNames(): Promise<string[]> {
    return await this.productTitles.allTextContents();
  }

  async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.sortDropdown.selectOption(option);
  }

  async addProductToCartByName(productName: string) {
    await this.page
      .locator('.inventory_item')
      .filter({ hasText: productName })
      .getByRole('button', { name: /Add to cart/i })
      .click();
  }

  async removeProductFromCartByName(productName: string) {
    await this.page
      .locator('.inventory_item')
      .filter({ hasText: productName })
      .getByRole('button', { name: /Remove/i })
      .click();
  }

  async assertCartCount(expectedCount: number) {
    if (expectedCount === 0) {
      await expect(this.cartBadge).toHaveCount(0);
    } else {
      await expect(this.cartBadge).toHaveText(
        expectedCount.toString()
      );
    }
  }
}
