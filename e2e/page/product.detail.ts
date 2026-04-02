import { Page } from '@playwright/test';

export class ProductDetailPage {
  constructor(private page: Page) {}

  addToCartButton() {
    return this.page.getByRole('link', { name: 'Add to cart' });
  }

  async addProductToCart() {
    await this.addToCartButton().click();
    await this.page.waitForEvent('dialog').then(dialog => dialog.accept());
  }

}