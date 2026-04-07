
import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../fixtures/pages.fixture';

const { When, Then } = createBdd(test);
When('the user selects product {string}',async ({ homePage }, productName) => {
    await homePage.expectProductsVisible();
    await homePage.clickProduct(productName);
});

Then('product name should be {string}', async ({ productDetailPage }, name) => {
    await expect(productDetailPage.productName).toHaveText(name);
});

Then('product price should be {string}', async ({ productDetailPage }, price) => {
  await expect(productDetailPage.productPrice).toHaveText(price);
});

Then('product description should contain {string}', async ({ productDetailPage }, desc) => {
  await expect(productDetailPage.productDescription).toContainText(desc);
});