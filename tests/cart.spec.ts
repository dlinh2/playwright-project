import { test } from '@playwright/test';
import { HomePage } from '../e2e/page/home.page';
import { CartPage } from '../e2e/page/cart.page';

test.describe('Cart Tests', () => {
  test('Add product to cart and delete it', async ({ page }) => {
    const home = new HomePage(page);
    const cart = new CartPage(page);

    const productName = 'Samsung galaxy s6';

    // Step 1: Go to home
    await home.goToHome();

    // Step 2: Add product
    await home.addProductToCart(productName);

    // Step 3: Go to cart
    await home.goToCart();

    // Step 4: Verify product in cart
    await cart.expectProductInCart(productName);

    // Step 5: Delete product
    await cart.deleteProduct(productName);

    // Step 6: Verify cart empty
    await cart.expectCartEmpty();
  });
});