// Generated from: e2e\tests\features\home.feature
import { test } from "../../../../e2e/fixtures/pages.fixture.ts";

test.describe('Home', () => {

  test('View Home', async ({ Given, Then, homePage, page }) => { 
    await Given('the user is on the homepage', null, { page }); 
    await Then('the user should see homepage content', null, { homePage }); 
  });

  test('View header logo and store name', async ({ Given, Then, homePage, page }) => { 
    await Given('the user is on the homepage', null, { page }); 
    await Then('the user should see header logo and store name', null, { homePage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\tests\\features\\home.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then the user should see homepage content","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the user should see header logo and store name","stepMatchArguments":[]}]},
]; // bdd-data-end