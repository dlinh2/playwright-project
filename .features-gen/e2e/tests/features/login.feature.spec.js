// Generated from: e2e\tests\features\login.feature
import { test } from "../../../../e2e/fixtures/pages.fixture.ts";

test.describe('Login', () => {

  test.describe('Login with "<type>" credentials', () => {

    test('Login with "valid" credentials', async ({ Given, When, Then, And, loginPage, page }) => { 
      await Given('the user is on the homepage', null, { page }); 
      await When('the user opens login modal', null, { loginPage }); 
      await And('the user logs in with username "tun" and password "admin"', null, { loginPage }); 
      await Then('the login result should be "Welcome tun"', null, { loginPage }); 
    });

    test('Login with "empty username" credentials', async ({ Given, When, Then, And, loginPage, page }) => { 
      await Given('the user is on the homepage', null, { page }); 
      await When('the user opens login modal', null, { loginPage }); 
      await And('the user logs in with username "" and password "admin"', null, { loginPage }); 
      await Then('the login result should be "Please fill out Username and Password"', null, { loginPage }); 
    });

    test('Login with "empty password" credentials', async ({ Given, When, Then, And, loginPage, page }) => { 
      await Given('the user is on the homepage', null, { page }); 
      await When('the user opens login modal', null, { loginPage }); 
      await And('the user logs in with username "tun" and password ""', null, { loginPage }); 
      await Then('the login result should be "Please fill out Username and Password"', null, { loginPage }); 
    });

    test('Login with "empty username and password" credentials', async ({ Given, When, Then, And, loginPage, page }) => { 
      await Given('the user is on the homepage', null, { page }); 
      await When('the user opens login modal', null, { loginPage }); 
      await And('the user logs in with username "" and password ""', null, { loginPage }); 
      await Then('the login result should be "Please fill out Username and Password"', null, { loginPage }); 
    });

    test('Login with "invalid username" credentials', async ({ Given, When, Then, And, loginPage, page }) => { 
      await Given('the user is on the homepage', null, { page }); 
      await When('the user opens login modal', null, { loginPage }); 
      await And('the user logs in with username "sdhf1@434" and password "admin"', null, { loginPage }); 
      await Then('the login result should be "User does not exist."', null, { loginPage }); 
    });

    test('Login with "invalid password" credentials', async ({ Given, When, Then, And, loginPage, page }) => { 
      await Given('the user is on the homepage', null, { page }); 
      await When('the user opens login modal', null, { loginPage }); 
      await And('the user logs in with username "tun" and password "wrong"', null, { loginPage }); 
      await Then('the login result should be "Wrong password."', null, { loginPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user opens login modal","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user logs in with username \"tun\" and password \"admin\"","stepMatchArguments":[{"group":{"start":31,"value":"\"tun\"","children":[{"start":32,"value":"tun","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"admin\"","children":[{"start":51,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the login result should be \"Welcome tun\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Welcome tun\"","children":[{"start":28,"value":"Welcome tun","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user opens login modal","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user logs in with username \"\" and password \"admin\"","stepMatchArguments":[{"group":{"start":31,"value":"\"\"","children":[{"start":32,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"admin\"","children":[{"start":48,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the login result should be \"Please fill out Username and Password\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Please fill out Username and Password\"","children":[{"start":28,"value":"Please fill out Username and Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user opens login modal","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user logs in with username \"tun\" and password \"\"","stepMatchArguments":[{"group":{"start":31,"value":"\"tun\"","children":[{"start":32,"value":"tun","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"\"","children":[{"start":51,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the login result should be \"Please fill out Username and Password\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Please fill out Username and Password\"","children":[{"start":28,"value":"Please fill out Username and Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":30,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user opens login modal","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user logs in with username \"\" and password \"\"","stepMatchArguments":[{"group":{"start":31,"value":"\"\"","children":[{"start":32,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"\"","children":[{"start":48,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the login result should be \"Please fill out Username and Password\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Please fill out Username and Password\"","children":[{"start":28,"value":"Please fill out Username and Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user opens login modal","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user logs in with username \"sdhf1@434\" and password \"admin\"","stepMatchArguments":[{"group":{"start":31,"value":"\"sdhf1@434\"","children":[{"start":32,"value":"sdhf1@434","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":56,"value":"\"admin\"","children":[{"start":57,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the login result should be \"User does not exist.\"","stepMatchArguments":[{"group":{"start":27,"value":"\"User does not exist.\"","children":[{"start":28,"value":"User does not exist.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":43,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":44,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user opens login modal","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user logs in with username \"tun\" and password \"wrong\"","stepMatchArguments":[{"group":{"start":31,"value":"\"tun\"","children":[{"start":32,"value":"tun","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"wrong\"","children":[{"start":51,"value":"wrong","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the login result should be \"Wrong password.\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Wrong password.\"","children":[{"start":28,"value":"Wrong password.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end