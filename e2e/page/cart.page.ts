import { Page, expect } from '@playwright/test';
import { time } from 'node:console';

export class CartPage {
  constructor(private page: Page) {}

  cartItems() {
    return this.page.locator('#tbodyid tr');
  }

  deleteButtonByProduct(productName: string) {
    return this.page.locator('tr', {
      has: this.page.locator('td', { hasText: productName })
    }).getByRole('link', { name: 'Delete' });
  }

  async expectProductInCart(productName: string) {
    await expect(
      this.page.locator('#tbodyid')
    ).toContainText(productName, { timeout: 10000 });
  }

  async deleteProduct(productName: string) {
    await this.deleteButtonByProduct(productName).click();
  }

  async expectCartEmpty() {
    await expect(this.cartItems()).toHaveCount(0);
  }
}