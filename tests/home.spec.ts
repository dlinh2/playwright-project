import { test } from '@playwright/test';
import { HomePage } from '../e2e/page/home.page';

test.describe('Homepage Tests', () => {

  test('Verify homepage UI', async ({ page }) => {
    const home = new HomePage(page);

    // Step 1: Go to homepage
    await home.goto();

    // Step 2: Verify navbar
    await home.expectHomePageLoaded();

    // Step 3: Verify product list visible
    await home.expectProductsVisible();

    // Step 4: Verify product count > 0
    await home.expectProductCountGreaterThanZero();
  });

});