import { test } from '@playwright/test';
import { HomePage } from '../e2e/page/home.page';
import { CartPage } from '../e2e/page/cart.page';
import { productsData } from '../e2e/data/products.data';
import { ProductDetailPage } from '../e2e/page/product.detail';

const randomProduct = productsData[Math.floor(Math.random() * productsData.length)];

test.describe('Cart Tests', () => {
  test('Add product to cart and delete it', async ({ page }) => {
    const home = new HomePage(page);
    const cart = new CartPage(page);
    const productDetail = new ProductDetailPage(page);

    // Step 1: Go to home
    await page.goto('/');
    await home.expectProductsVisible();
    // Step 2: go to product detail
    await home.clickProduct(randomProduct.name);

    // Step 3: Add product to cart
    await productDetail.addProductToCart();

    // Step 4: Go to cart
    await home.goToCart();

    // Step 5: Verify product in cart
    await cart.expectProductInCart(randomProduct.name);

    // Step 6: Delete product
    await cart.deleteProduct(randomProduct.name);

    // Step 7: Verify cart empty
    await cart.expectCartEmpty();
  });
});