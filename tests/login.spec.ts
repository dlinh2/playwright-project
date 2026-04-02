import { expect, test } from '@playwright/test';
import { LoginPage } from '../e2e/page/login.page';
import { loginData } from '../e2e/data/login.data';

test.describe('Login Tests - Full Coverage', () => {
  loginData.forEach((data, index) => {
    test(`Login - ${data.expected} - ${data.username || 'empty'} [${index}]`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await page.goto('/');
      await loginPage.openLoginModal();
      await loginPage.expectLoginModalOpen();

      // ACTION
      await loginPage.login(data);
      // wait to debug
      await page.waitForTimeout(2000);
    });
  });
});