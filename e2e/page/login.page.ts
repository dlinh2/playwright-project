import { Page, expect } from '@playwright/test';

export interface LoginCredentials {
  username?: string;
  password?: string;
  expected?: 'success' | 'fail';
  message?: string;
}

export class LoginPage {
  constructor(private page: Page) {}

  usernameInput() {
    return this.page.locator('#loginusername');
  }

  passwordInput() {
    return this.page.locator('#loginpassword');
  }

  loginButton() {
    return this.page.getByRole('button', { name: 'Log in' });
  }

  async openLoginModal() {
    await this.page.getByRole('link', { name: 'Log in' }).click();
  }
  // ASSERT open modal
  async expectLoginModalOpen() {
    await expect(this.loginButton()).toBeVisible();
  }

  // ACTION
  async login(data: LoginCredentials) {
    if (data.username !== undefined) {
        await this.usernameInput().fill(data.username);
    }

    if (data.password !== undefined) {
        await this.passwordInput().fill(data.password);
    }

    await this.loginButton().click();
    // ASSERT SUCCESS
    if (data.expected === 'success') {
    // Wait for the login process to complete and the welcome message to appear
        await expect(
        this.page.getByRole('link', { name: `Welcome ${data.username}` })).toBeVisible({ timeout: 10000 });
    }
    // ASSERT FAIL
    this.page.once('dialog', async (dialog) => {
          await expect(dialog.message()).toContain(data.message);
          await dialog.accept();
      });
  }
}