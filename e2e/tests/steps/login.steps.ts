import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../fixtures/pages.fixture';

const { Given, When, Then } = createBdd(test);


Given('the user is on the homepage', async ({ page }) => {
  await page.goto('/');
});

When('the user opens login modal', async ({ loginPage }) => {
  await loginPage.openLoginModal();
});

When(
  'the user logs in with username {string} and password {string}',
  async ({ loginPage }, username: string, password: string) => {
    await loginPage.login(username, password);
  }
);

Then('the login result should be {string}', async ({ loginPage }, message: string) => {
  await loginPage.expectLoginResult(message);
});