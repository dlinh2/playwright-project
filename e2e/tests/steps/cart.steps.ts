import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../fixtures/pages.fixture';
import { productsData } from '../../data/products.data';

const { When } = createBdd(test);


const randomProduct = productsData[Math.floor(Math.random() * productsData.length)];

When('the user selects a random product',async ({ homePage }) => {
    await homePage.expectProductsVisible();
    await homePage.clickProduct(randomProduct.name);
});


When('the user adds the product to cart', async ({ productDetailPage}) => {
  await productDetailPage.addProductToCart();
});


When('the user navigates to cart', async ({ homePage }) => {
  await homePage.goToCart();
});


When('the cart should contain the selected product', async ({ cartPage }) => {
    await cartPage.expectProductInCart(randomProduct.name);
});