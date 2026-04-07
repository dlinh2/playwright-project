// Generated from: e2e\tests\features\product_detail.feature
import { test } from "../../../../e2e/fixtures/pages.fixture.ts";

test.describe('Product Detail', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user is on the homepage', null, { page }); 
  });
  
  test.describe('View product detail correctly', () => {

    test('Example #1', async ({ When, Then, And, homePage, productDetailPage }) => { 
      await When('the user selects product "Samsung galaxy s6"', null, { homePage }); 
      await Then('product name should be "Samsung galaxy s6"', null, { productDetailPage }); 
      await And('product price should be "$360 *includes tax"', null, { productDetailPage }); 
      await And('product description should contain "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded."', null, { productDetailPage }); 
    });

    test('Example #2', async ({ When, Then, And, homePage, productDetailPage }) => { 
      await When('the user selects product "Nokia lumia 1520"', null, { homePage }); 
      await Then('product name should be "Nokia lumia 1520"', null, { productDetailPage }); 
      await And('product price should be "$820 *includes tax"', null, { productDetailPage }); 
      await And('product description should contain "The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM."', null, { productDetailPage }); 
    });

    test('Example #3', async ({ When, Then, And, homePage, productDetailPage }) => { 
      await When('the user selects product "Nexus 6"', null, { homePage }); 
      await Then('product name should be "Nexus 6"', null, { productDetailPage }); 
      await And('product price should be "$650 *includes tax"', null, { productDetailPage }); 
      await And('product description should contain "The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM."', null, { productDetailPage }); 
    });

    test('Example #4', async ({ When, Then, And, homePage, productDetailPage }) => { 
      await When('the user selects product "Samsung galaxy s7"', null, { homePage }); 
      await Then('product name should be "Samsung galaxy s7"', null, { productDetailPage }); 
      await And('product price should be "$800 *includes tax"', null, { productDetailPage }); 
      await And('product description should contain "The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card."', null, { productDetailPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\tests\\features\\product_detail.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user selects product \"Samsung galaxy s6\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Samsung galaxy s6\"","children":[{"start":26,"value":"Samsung galaxy s6","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then product name should be \"Samsung galaxy s6\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Samsung galaxy s6\"","children":[{"start":24,"value":"Samsung galaxy s6","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And product price should be \"$360 *includes tax\"","stepMatchArguments":[{"group":{"start":24,"value":"\"$360 *includes tax\"","children":[{"start":25,"value":"$360 *includes tax","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And product description should contain \"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.\"","stepMatchArguments":[{"group":{"start":35,"value":"\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.\"","children":[{"start":36,"value":"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user selects product \"Nokia lumia 1520\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Nokia lumia 1520\"","children":[{"start":26,"value":"Nokia lumia 1520","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then product name should be \"Nokia lumia 1520\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Nokia lumia 1520\"","children":[{"start":24,"value":"Nokia lumia 1520","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And product price should be \"$820 *includes tax\"","stepMatchArguments":[{"group":{"start":24,"value":"\"$820 *includes tax\"","children":[{"start":25,"value":"$820 *includes tax","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And product description should contain \"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.\"","stepMatchArguments":[{"group":{"start":35,"value":"\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.\"","children":[{"start":36,"value":"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user selects product \"Nexus 6\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Nexus 6\"","children":[{"start":26,"value":"Nexus 6","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then product name should be \"Nexus 6\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Nexus 6\"","children":[{"start":24,"value":"Nexus 6","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And product price should be \"$650 *includes tax\"","stepMatchArguments":[{"group":{"start":24,"value":"\"$650 *includes tax\"","children":[{"start":25,"value":"$650 *includes tax","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And product description should contain \"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\"","stepMatchArguments":[{"group":{"start":35,"value":"\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\"","children":[{"start":36,"value":"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":33,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user selects product \"Samsung galaxy s7\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Samsung galaxy s7\"","children":[{"start":26,"value":"Samsung galaxy s7","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then product name should be \"Samsung galaxy s7\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Samsung galaxy s7\"","children":[{"start":24,"value":"Samsung galaxy s7","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And product price should be \"$800 *includes tax\"","stepMatchArguments":[{"group":{"start":24,"value":"\"$800 *includes tax\"","children":[{"start":25,"value":"$800 *includes tax","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And product description should contain \"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.\"","stepMatchArguments":[{"group":{"start":35,"value":"\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.\"","children":[{"start":36,"value":"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end