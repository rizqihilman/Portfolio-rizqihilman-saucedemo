import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  // Step One
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;

  // Step Two
  readonly summaryItems: Locator;
  readonly finishButton: Locator;

  // Complete
  readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByRole('button', { name: 'Continue' });

    this.summaryItems = page.locator('.cart_item');
    this.finishButton = page.getByRole('button', { name: 'Finish' });

    this.completeHeader = page.getByRole('heading', {
      name: /Thank you for your order/i,
    });
  }

  async fillCustomerInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();

    await expect(this.page).toHaveURL(/checkout-step-two\.html/);
  }

  async assertSummaryItemCount(expectedCount: number) {
    await expect(this.summaryItems).toHaveCount(expectedCount);
  }

  async finishCheckout() {
    await this.finishButton.click();
    await expect(this.page).toHaveURL(/checkout-complete\.html/);
  }

  async assertCheckoutComplete() {
    await expect(this.completeHeader).toBeVisible();
  }
}
