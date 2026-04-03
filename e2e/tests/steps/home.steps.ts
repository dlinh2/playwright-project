import { createBdd } from 'playwright-bdd';
import { test} from '../../fixtures/pages.fixture';

const { Then } = createBdd(test);


Then('the user should see homepage content', async ({ homePage }) => {
    await homePage.expectHomePageHeaderLoaded();
    await homePage.expectProductsVisible();
    await homePage.expectCategoriesVisible(); 
    await homePage.expectHomePageFooterLoaded();
});