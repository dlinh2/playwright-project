import { createBdd } from 'playwright-bdd';
import { expect, test} from '../../fixtures/pages.fixture';

const { Then } = createBdd(test);


Then('the user should see homepage content', async ({ homePage }) => {
    await homePage.expectHomePageHeaderLoaded();
    await homePage.expectProductsVisible();
    await homePage.expectCategoriesVisible(); 
    await homePage.expectHomePageFooterLoaded();
});

Then('the user should see header logo and store name', async ({ homePage }) => {
    // Visual test
    await expect(homePage.logo()).toHaveScreenshot('header-logo.png');
});