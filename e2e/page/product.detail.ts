import { Page, Locator } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly productDescription: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productName = page.locator('.name');
    this.productPrice = page.locator('.price-container');
    this.productDescription = page.locator('#more-information p');
  }

  addToCartButton() {
    return this.page.getByRole('link', { name: 'Add to cart' });
  }

  async addProductToCart() {
    await this.addToCartButton().click();
    await this.page.waitForEvent('dialog').then(dialog => dialog.accept());
  }
}