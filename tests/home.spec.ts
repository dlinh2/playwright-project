import { test } from '@playwright/test';
import { HomePage } from '../e2e/page/home.page';

test.describe('Homepage Tests', () => {

  test('Verify homepage have categories and products', async ({ page }) => {
    const home = new HomePage(page);

    // Step 1: Go to homepage
    await page.goto('/');

    // Step 2: Verify header loaded
    await home.expectHomePageHeaderLoaded();

    // Step 3: Verify product list visible
    await home.expectProductsVisible();

    // Step 4: Verify categories visible
    await home.expectCategoriesVisible(); 
    
    // Step 5: Verify footer
    await home.expectHomePageFooterLoaded();

  });

});