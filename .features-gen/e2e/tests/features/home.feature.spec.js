// Generated from: e2e\tests\features\home.feature
import { test } from "../../../../e2e/fixtures/pages.fixture.ts";

test.describe('Dashboard', () => {

  test('View dashboard', async ({ Given, Then, homePage, page }) => { 
    await Given('the user is on the homepage', null, { page }); 
    await Then('the user should see homepage content', null, { homePage }); 
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
]; // bdd-data-end