import { test as base } from 'playwright-bdd';
import { LoginPage } from '../page/login.page';
import { ProductDetailPage } from '../page/product.detail';
import { HomePage } from '../page/home.page';
import { CartPage } from '../page/cart.page';

type MyFixtures = {
  loginPage: LoginPage;
  cartPage: CartPage;
  homePage: HomePage;
  productDetailPage: ProductDetailPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productDetailPage: async ({ page }, use) => {
    await use(new ProductDetailPage(page)); 
  },
});

export { expect } from '@playwright/test';