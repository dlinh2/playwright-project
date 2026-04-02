import { Page, expect } from '@playwright/test';
import { footerData } from '../data/footer.data';

export class HomePage {
  constructor(private page: Page) {}
  homeLink() {
    return this.page.getByRole('link', { name: 'Home' });
  }
  contactLink() {
    return this.page.getByRole('link', { name: 'Contact' });
  }
  aboutUsLink() {
    return this.page.getByRole('link', { name: 'About us' });
  }
  cartLink() {
    return this.page.locator('#cartur');
  }
  loginLink() {
    return this.page.getByRole('link', { name: 'Log in' });
  }
  signUpLink() {
    return this.page.getByRole('link', { name: 'Sign up' });
  }
  Categories() { 
    return this.page.getByRole('link', { name: 'Categories' });
  }
  Phones() {
    return this.page.getByRole('link', { name: 'Phones' });
  }
  Laptops() {
    return this.page.getByRole('link', { name: 'Laptops' });
  }
  Monitors() {
    return this.page.getByRole('link', { name: 'Monitors' });
  }
  products() {
    return this.page.locator('.card');
  }
  aboutUsFooter() {
    return this.page.getByRole('link', { name: 'About us' });
  }

  async expectHomePageHeaderLoaded() {
    await expect(this.homeLink()).toBeVisible();
    await expect(this.contactLink()).toBeVisible();
    await expect(this.aboutUsLink()).toBeVisible();
    await expect(this.cartLink()).toBeVisible();
    await expect(this.loginLink()).toBeVisible();
    await expect(this.signUpLink()).toBeVisible();
  }

  async expectProductsVisible() {
    await expect(this.Phones()).toBeVisible();
    await expect(this.Laptops()).toBeVisible();
    await expect(this.Monitors()).toBeVisible();
  }

  async expectCategoriesVisible() {
    await expect(this.Categories()).toBeVisible();
    await expect(this.Phones()).toBeVisible();
    await expect(this.Laptops()).toBeVisible();
    await expect(this.Monitors()).toBeVisible();
  }

  async expectHomePageFooterLoaded() {
    const footer = this.page.locator('#footc');
    await expect(footer.getByText(footerData.about)).toBeVisible();
    await expect(footer.getByText(footerData.content_about)).toBeVisible();
    await expect(footer.getByText(footerData.contact)).toBeVisible();
    await expect(footer.getByText(footerData.address)).toBeVisible();
    await expect(footer.getByText(footerData.phone)).toBeVisible();
    await expect(footer.getByText(footerData.email)).toBeVisible();
  
    const productStore = this.page.locator('h4', { hasText: 'PRODUCT STORE' });
    await expect(productStore).toBeVisible();
    await expect(productStore.locator('img')).toBeVisible();

  }

  async goToCart() {
    await this.cartLink().click();
    await expect(this.page).toHaveURL(/.*cart/);
  }

  async clickProduct(productName: string) {
    await this.page.getByRole('link', { name: productName }).click();
    await expect(this.page).toHaveURL(/prod.html/);
  }
}