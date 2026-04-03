// Generated from: e2e\tests\features\cart.feature
import { test } from "../../../../e2e/fixtures/pages.fixture.ts";

test.describe('Add product to cart', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user is on the homepage', null, { page }); 
  });
  
  test('Add a random product to cart', async ({ When, Then, And, cartPage, homePage, productDetailPage }) => { 
    await When('the user selects a random product', null, { homePage }); 
    await And('the user adds the product to cart', null, { productDetailPage }); 
    await And('the user navigates to cart', null, { homePage }); 
    await Then('the cart should contain the selected product', null, { cartPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\tests\\features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user selects a random product","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And the user adds the product to cart","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And the user navigates to cart","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the cart should contain the selected product","stepMatchArguments":[]}]},
]; // bdd-data-end