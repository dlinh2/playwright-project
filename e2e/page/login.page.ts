import { Page, expect } from '@playwright/test';

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

  logoutButton() {
    return this.page.getByRole('button', { name: 'Log out' });
  }

  async openLoginModal() {
    await this.page.getByRole('link', { name: 'Log in' }).click();
    expect(this.usernameInput()).toBeVisible({ timeout: 10000 });
  }
  // ASSERT open modal
  async expectLoginModalOpen() {
    await expect(this.loginButton()).toBeVisible();
  }

  // ACTION
  async login(username?: string, password?: string) {
    if (username !== undefined) {
        await this.usernameInput().fill(username);
    }

    if (password !== undefined) {
        await this.passwordInput().fill(password);
    }

    await this.loginButton().click();
  }
  async expectLoginResult(message: string) {
    // ASSERT SUCCESS
    if (message.includes('Welcome') ){
    // Wait for the login process to complete and the welcome message to appear
        await expect(
        this.page.getByRole('link', { name: message })).toBeVisible({ timeout: 10000 });
    }
    // ASSERT FAIL
    await this.page.once('dialog', async (dialog) => {
          await expect(dialog.message()).toContain(message);
          await dialog.accept();
      });
  }
}