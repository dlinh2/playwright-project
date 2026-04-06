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
    const loginLink = this.page.getByRole('link', { name: 'Log in' });
    await expect(loginLink).toBeVisible();
    await loginLink.click();
    expect(this.usernameInput()).toBeVisible();
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

  }
  async expectLoginResult(message: string) {
    // ASSERT SUCCESS
    if (message.includes('Welcome') ){
    // Wait for the login process to complete and the welcome message to appear
        await this.loginButton().click();
        await expect(
        this.page.getByRole('link', { name: message })).toBeVisible({ timeout: 10000 });
    }
    // ASSERT FAIL
    else {
      await Promise.all([
        this.page.waitForEvent('dialog').then(async dialog => {
          expect(dialog.message()).toContain(message);
          await dialog.accept();
        }),
        this.loginButton().click(),
      ]);
    }
  }
}