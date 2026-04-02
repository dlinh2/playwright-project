import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goToHome() {
    await this.page.goto('/');
  }

  productLink(productName: string) {
    return this.page.getByRole('link', { name: productName });
  }

  addToCartButton() {
    return this.page.getByRole('link', { name: 'Add to cart' });
  }

  cartLink() {
    return this.page.getByRole('link', { name: 'Cart' });
  }

  async addProductToCart(productName: string) {
    await this.productLink(productName).click();

    const [dialog] = await Promise.all([
      this.page.waitForEvent('dialog'),
      this.addToCartButton().click()
    ]);

    await dialog.accept();
  }

  async goToCart() {
    await this.cartLink().click();
  }
}